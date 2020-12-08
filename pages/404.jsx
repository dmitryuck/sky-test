import { Row, Col, Container } from 'react-bootstrap';
import HeaderLayout from '../layouts/HeaderLayout';
import FooterLayout from '../layouts/FooterLayout';


const appContainerStyle = {
  margin: 0,
  padding: 0,
  width: '100%',
};

const Index = (props) => (
  <Container fluid style={appContainerStyle}>
    <Row>
      <Col xs={12}>
        <HeaderLayout />
        <FooterLayout />
      </Col>
    </Row>
  </Container>
);

export default Index;