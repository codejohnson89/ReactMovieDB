import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import {Link} from 'react-router-dom';

export default function Header() {
    return (
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Nav>
                        <Nav.Item>
                            <Link to="/">Movies</Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link to="/tvshows">TV Shows</Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link to="/contact">Contact</Link>
                        </Nav.Item>
                    </Nav>
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                        <Link to="/signup">Sign In</Link>
                        {/* Signed in as: <a href="#login">Mark Otto</a> */}
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
    )
}