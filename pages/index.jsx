import { Row, Col, Container } from 'react-bootstrap';
import HomeLayout from '../layouts/HomeLayout';
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
        <HomeLayout />
        <FooterLayout />
      </Col>
    </Row>
  </Container>
);

Index.getInitialProps = async ({ query }) => {
  return { ...query };
};

export default Index;
