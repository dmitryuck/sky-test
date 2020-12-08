import { Row, Col, Container } from 'react-bootstrap';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <Container fluid className={styles.footerContainer}>
      <Row>
        <Col xs={12}>
          <Container>
            <Row>
              <Col xs={2}></Col>

              <Col xs={9}></Col>

              <Col xs={1}></Col>
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
