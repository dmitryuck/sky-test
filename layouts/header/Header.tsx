import React from 'react';
import Link from 'next/link';
import { Row, Col, Container } from 'react-bootstrap';
import styles from './Header.scss';

const Header = () => {
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
