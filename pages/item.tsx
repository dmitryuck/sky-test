import { Row, Col, Container } from 'react-bootstrap';
import ItemLayout from '../layouts/ItemLayout';
import HeaderLayout from '../layouts/HeaderLayout';
import FooterLayout from '../layouts/FooterLayout';

interface Props {
  category: string;
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
        <ItemLayout category={props.category} name={props.name} />
        <FooterLayout />
      </Col>
    </Row>
  </Container>
);

Index.getInitialProps = async ({ query }) => {
  return { ...query };
};

export default Index;
