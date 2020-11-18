import { Row, Col, Container } from 'react-bootstrap';
import CategoryLayout from '../layouts/CategoryLayout';
import HeaderLayout from '../layouts/HeaderLayout';
import FooterLayout from '../layouts/FooterLayout';

interface Props {
  name: string;
}

const appContainerStyle = {
  margin: 0,
  padding: 0,
  width: '100%',
};

const Index = (props: Props) => (
  <Container fluid style={appContainerStyle}>
    <Row>
      <Col xs={12}>
        <HeaderLayout />
        <CategoryLayout name={props.name} />
        <FooterLayout />
      </Col>
    </Row>
  </Container>
);

Index.getInitialProps = async ({ query }) => {
  return { ...query };
};

export default Index;
