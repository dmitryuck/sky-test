import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Row, Col, Container } from 'react-bootstrap';
import CategoryCard from './CategoryCard/CategoryCard';
import Pagination from '../shared/Pagination';
import AppActions from '../../redux/actions/AppActions';
import styles from './Home.scss';
import { getRequest } from '../../client/PageUtils';
import ServerApi from '../../server/enums/ServerApi';

const Home = () => {
  const dispatch = useDispatch();

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    setTimeout(async () => {
      const [fetchError, fetchResult] = await getRequest(
        ServerApi.FETCH_CATEGORIES
      );

      if (fetchResult) {
        setCategories(
          Object.keys(fetchResult).map((key) => ({
            name: key,
            url: fetchResult[key],
          }))
        );
      }
    });
  }, []);

  const renderCategories = () =>
    categories?.map((category: any, index: number) => (
      <CategoryCard key={index} category={category} />
    ));

  return (
    <Container className={styles.gridContainer}>
      <Row>
        <Col xs={12}>
          <div className={styles.homeContainer}>{renderCategories()}</div>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
