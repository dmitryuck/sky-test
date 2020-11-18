import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Row, Col, Container } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import AppActions from '../../redux/actions/AppActions';
import Input from '../shared/Input';
import ServerApi from '../../server/enums/ServerApi';
import { getRequest } from '../../client/PageUtils';
import { useDebounce } from '../../client/PageUtils';
import { getPage } from '../../redux/selectors/AppSelectors';
import styles from './Header.scss';

const Header = () => {
  const dispatch = useDispatch();

  const page = useSelector(getPage);

  const [search, setSearch] = useState('');

  //const clearDelayTime = 30000;

  const debSearch = useDebounce(search, 300);

  useEffect(() => {
    setTimeout(async () => {
      const [
        fetchError,
        fetchResult,
      ] = await getRequest(ServerApi.FETCH_CATEGORIES, { search, page });

      if (fetchResult['Response'] === 'True') {
        dispatch(AppActions.setFilms(fetchResult['Search']));
        dispatch(AppActions.setTotal(parseInt(fetchResult['totalResults'])));
        dispatch(AppActions.setMessage(''));
      }

      console.log(fetchResult);
    });
  });

  useEffect(() => {
    if (search.length >= 3) {
      setTimeout(async () => {
        dispatch(AppActions.setLoading(true));

        const [
          fetchError,
          fetchResult,
        ] = await getRequest(ServerApi.FETCH_CATEGORIES, { search, page });

        if (fetchResult['Response'] === 'True') {
          dispatch(AppActions.setFilms(fetchResult['Search']));
          dispatch(AppActions.setTotal(parseInt(fetchResult['totalResults'])));
          dispatch(AppActions.setMessage(''));
        }

        dispatch(AppActions.setLoading(false));
      });
    } else {
      dispatch(AppActions.setFilms([]));
      dispatch(AppActions.setTotal(0));
      dispatch(AppActions.setMessage(''));
    }
  }, [debSearch, page]);

  return (
    <Container fluid className={styles.headerGrid}>
      <Row className={styles.headerContainer}>
        <Col xs={12}>
          <Container>
            <Row>
              <Col xs={2}>
                <Link href='/'>
                  <div className={styles.logoContainer}>
                    <img src='/img/logo.svg' />
                    <h1>Test</h1>
                  </div>
                </Link>
              </Col>

              <Col xs={10}>
                <div className={styles.searchContainer}>
                  <Input onChange={setSearch} />
                </div>
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default Header;
