import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Row, Col, Container } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import AppActions from '../../redux/actions/AppActions';
import ServerApi from '../../server/enums/ServerApi';
import { getRequest } from '../../client/PageUtils';
import styles from './Header.scss';

const Header = () => {
  const dispatch = useDispatch();

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
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default Header;
