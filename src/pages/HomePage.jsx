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
  // Col,
  Jumbotron,
  Button
} from 'reactstrap';
import EmailForm from '../components/EmailForm'

function HomePage() {
  let links = ["mailto:info@trustedrootsrealty.com?Subject=Interested%20Buyer", "mailto:info@trustedrootsrealty.com?Subject=Interested%20Seller"]
  return <>
  <Jumbotron className="green-back">
    <Container>
      <Row>
        <h1>Please email us by clicking one of the buttons below</h1>
        <Row>
          {links.map((l, i) => {return <div className="margin">
            <Button key={i} href={l[i]}>Interested Buyer</Button>
          </div>})}
        </Row>
      </Row>
      <EmailForm />
    </Container>
  </Jumbotron>
</>
}

export default HomePage
