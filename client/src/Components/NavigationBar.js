import React from 'react';
import { Nav, Navbar, Col } from 'react-bootstrap';
import './NavigationBar.scss';




export const NavigationBar = () => (
    <Navbar collapseOnSelect expand="lg" >

            <Col>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-2">
                        <Nav.Link href="/home">HOME</Nav.Link>
                        <Nav.Link href="/post">POSTS</Nav.Link>
                        <Nav.Link href="#">ABOUT</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Col>



            <Col className="d-flex justify-content-center">
                <Navbar.Brand href="#home" className="m-0">FORWARD MUSING</Navbar.Brand>
            </Col>



            <Col>
                <form className="form-inline d-none d-lg-flex justify-content-end">
                    <button className="btn btn-dark" type="button">Get Involved</button>
                </form>
            </Col>

        </Navbar>
)

