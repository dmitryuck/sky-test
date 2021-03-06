import React, { useEffect, useState } from 'react';
import { Row, Col, Container, Table } from 'react-bootstrap';
import { getRequest } from '../../client/PageUtils';
import { ServerApi } from '../../server/common/Const';
import styles from './Item.module.scss';


const CategoryLayout = (props) => {
  const [result, setResult] = useState([]);

  useEffect(() => {
    setTimeout(async () => {
      const [fetchError, fetchResult] = await getRequest(
        ServerApi.FETCH_DATA_FOR_ITEM,
        {
          category: props.category,
          name: props.name,
        }
      );

      if (fetchResult) {
        setResult(fetchResult.results[0]);
      }
    });
  }, []);

  const renderResult = () =>
    Object.keys(result)?.map((keyName, index) => (
      <tr key={index}>
        <td>{keyName}</td>
        <td>{result[keyName]}</td>
      </tr>
    ));

  return (
    <Container className={styles.gridContainer}>
      <Row>
        <Col xs={12}>
          <div className={styles.homeContainer}>{}</div>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Key</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>{renderResult()}</tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default CategoryLayout;
