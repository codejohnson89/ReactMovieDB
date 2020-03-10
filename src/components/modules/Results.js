import React from 'react';
import { Card, CardDeck, Col } from 'react-bootstrap';

export default function Results(props) {
    return (
        <Col md={4} sm={6}>
            <CardDeck>
                <Card>
                    <Card.Img variant="top" src={props.img}/>
                    <Card.Title>{props.text}<br></br>{props.date}</Card.Title>
                </Card>
            </CardDeck>
        </Col>
    )
}