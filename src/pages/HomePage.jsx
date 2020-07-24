import React from 'react'
import {
  // Collapse,
  // Navbar,
  // NavbarToggler,
  // NavbarBrand,
  // Nav,
  // NavItem,
  // NavLink,
  Container,
  Row,
  Col,
  Jumbotron,
  Button
} from 'reactstrap';

function HomePage() {
  return <>
  <Jumbotron className="green-back">
    <Container>
      <Row>
        <h1>Please email us by clicking one of the buttons below</h1>
        <Row>
        <Col>
        <Button href="mailto:info@trustedrootsrealty.com?Subject=Interested%20Buyer">Interested Buyer</Button>
        </Col>
        <Col>
        <Button href="mailto:info@trustedrootsrealty.com?Subject=Interested%20Seller">Interested Seller</Button>
        </Col>
        </Row>
      </Row>
    </Container>
  </Jumbotron>
</>
}

export default HomePage
