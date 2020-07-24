import React, { useState } from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    // NavLink,
    // Container,
    // Row,
    // Col,
    // Jumbotron,
    // Button
} from 'reactstrap';
import { Link  } from 'react-router-dom'

function NavBar() {
const [isOpen, setIsOpen] = useState(true)
    const toggle = () => {
        setIsOpen(!isOpen);
    }
    return <div>
        <Navbar color="inverse" light expand="md">
                    <NavbarBrand href="/">Trusted Roots Realty</NavbarBrand>
                    <NavbarToggler onClick={() => toggle()} />
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <Link to="/">Go Home</Link>
                            </NavItem>
                            <NavItem>
                                <Link to="/buyer">Buyer</Link>
                            </NavItem>
                            <NavItem>
                                <Link to="/seller">Seller</Link>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
        
    </div>
}
export default  NavBar