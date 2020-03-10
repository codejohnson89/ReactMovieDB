import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import {Link} from 'react-router-dom';

export default function Header() {
    return (
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Nav>
                        <Nav.Item>
                            <Nav.Link>
                                <Link exact to="/">Movies</Link>
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link>
                                <Link exact to="/tvshows">TV Shows</Link>
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link>
                                <Link exact to="/contact">Contact</Link>
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Container>
            </Navbar>
    )
}