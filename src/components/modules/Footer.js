import React from 'react';
import { Container, Row, Col, Navbar } from 'react-bootstrap';

export default function Footer() {
    return (
        <footer>
            <Navbar bg="dark" variant="dark" fixed="bottom"><p>Built using React JS and Bootstrap.</p></Navbar>           
        </footer>
    )
}