import React from 'react';
import { Card, Button } from 'react-bootstrap';

export default function Poster(props) {
    return (
        <Card key={props.key} style={{ width: '18rem' }}>
            <Card.Img variant="top" src={`http://image.tmdb.org/t/p/w342${props.image}`} />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>Score: {props.rating} / 10</Card.Text>                
            </Card.Body>
            <Card.Footer>
            <Button variant="primary">{props.date}</Button>
            </Card.Footer>
        </Card>
    )
}