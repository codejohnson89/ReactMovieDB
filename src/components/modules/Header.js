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
                </Container>
            </Navbar>
    )
}