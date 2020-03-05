import React from 'react';
import { Container, Nav } from 'react-bootstrap';
import {Link} from 'react-router-dom';

export default function Header() {
    return (
        <Container>
                <Nav>
                    <Nav.Item>
                        <Link exact to="/">Home</Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Link exact to="/contact">Contact</Link>
                    </Nav.Item>
                </Nav>
        </Container>
    )
}