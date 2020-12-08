import React, { useEffect, useState } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import CategoryCard from './CategoryCard/CategoryCard';
import { getRequest } from '../../client/PageUtils';
import { ServerApi } from '../../server/common/Const';
import styles from './Home.module.scss';

const Home = () => {
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
    categories?.map((category, index) => (
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
