import React, { useState } from 'react';
import { Container, Col, Row, Form, Button } from 'react-bootstrap';

import firebase from '../firebase';

export default function Contact() {

    const [validated, setValidated] = useState(false);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [comments, setComments] = useState('');

    const handleSubmit = e => {
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
          e.preventDefault();
          e.stopPropagation();
        }        
        e.preventDefault();
    
        setValidated(true);
        console.log(firstName, lastName, email, comments)
        firebase
        .firestore()
        .collection("contact-suggestion-form")
            .add({
                firstName,
                lastName,
                email,
                comments
            })
            .then(() => {
                setFirstName('');
                setLastName('');
                setEmail('');
                setComments('');
            })
      };

    return (
        <Container>
            <Row className="contact-form">
                <Col sm={12}>
                <h2>Any feedback is welcomed!</h2>
                <p>If you find any errors, let me know!</p>
                    <Form netlify name="suggestionform" noValidate validated={validated} onSubmit={handleSubmit}>
                        <Form.Group controlId="formFirstName">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="input" placeholder="First name" value={firstName} onChange={e => setFirstName(e.currentTarget.value)}/>
                        </Form.Group>
                        <Form.Group controlId="formLastName">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="input" placeholder="Last name" value={lastName} onChange={e => setLastName(e.currentTarget.value)}/>
                        </Form.Group>
                        <Form.Group controlId="formEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter Email" value={email} onChange={e => setEmail(e.currentTarget.value)}/>
                        </Form.Group>
                        <Form.Group controlId="formText">
                        <Form.Label>Comments</Form.Label>
                        <Form.Control type="textarea" placeholder="Enter comments..." value={comments} onChange={e => setComments(e.currentTarget.value)}/>
                        </Form.Group>
                        <Button variant="primary" type="submit">Submit</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}