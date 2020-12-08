import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Row, Col, Container } from 'react-bootstrap';
import Pagination from '../shared/Pagination';
import { getRequest } from '../../client/PageUtils';
import { ServerApi } from '../../server/common/Const';
import CategoryItemCard from './CategoryItemCard/CategoryItemCard';
import { useDebounce } from '../../client/PageUtils';
import Input from '../shared/Input';
import styles from './Category.module.scss';


const CategoryLayout = (props) => {
  const dispatch = useDispatch();

  const [search, setSearch] = useState('');

  const debSearch = useDebounce(search, 300);

  const [page, setPage] = useState(1);
  const [count, setCount] = useState(0);
  const [results, setResults] = useState([]);

  useEffect(() => {
    setTimeout(async () => {
      const [fetchError, fetchResult] = await getRequest(
        ServerApi.FETCH_DATA_FOR_CATEGORY,
        {
          name: props.name,
        }
      );

      if (fetchResult) {
        setCount(fetchResult.count);
        setResults(fetchResult.results);
      }
    });
  }, []);

  useEffect(() => {
    if (search.length > 0) {
      setTimeout(async () => {
        const [fetchError, fetchResult] = await getRequest(
          ServerApi.SEARCH_DATA_FOR_CATEGORY,
          {
            name: props.name,
            search,
          }
        );

        if (fetchResult) {
          setPage(1);
          setCount(fetchResult.count);
          setResults(fetchResult.results);
        }
      });
    } else {
      setTimeout(async () => {
        const [fetchError, fetchResult] = await getRequest(
          ServerApi.FETCH_DATA_FOR_CATEGORY,
          {
            name: props.name,
          }
        );

        if (fetchResult) {
          setPage(1);
          setCount(fetchResult.count);
          setResults(fetchResult.results);
        }
      });
    }
  }, [debSearch]);

  const renderResults = () =>
    results?.map((result, index) => (
      <CategoryItemCard key={index} category={props.name} result={result} />
    ));

  const onPageChanged = (page) => {
    setPage(page);

    setTimeout(async () => {
      const [fetchError, fetchResult] = await getRequest(
        ServerApi.FETCH_DATA_FOR_CATEGORY,
        {
          name: props.name,
          page,
        }
      );

      if (fetchResult) {
        setCount(fetchResult.count);
        setResults(fetchResult.results);
      }
    });
  };

  return (
    <Container className={styles.gridContainer}>
      <Row>
        <Col xs={12}>
          <div className={styles.searchContainer}>
            <Input onChange={setSearch} />
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <div className={styles.homeContainer}>{renderResults()}</div>

          <Pagination
            currentPage={page}
            totalRecords={count}
            pageLimit={10}
            pageNeighbours={1}
            onPageChanged={onPageChanged}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default CategoryLayout;
