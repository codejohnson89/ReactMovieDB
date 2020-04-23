import React, { useState } from 'react';
import { Container, Col, Row, Form, Button } from 'react-bootstrap';

import firebase from 'firebase';

function LoginForm() {

    const [emailSignUp, setEmailSignUp] = useState("");
    const [userName, setUserName] = useState("");
    const [passwordSignUp, setPasswordSignUp] = useState("");
    const [validated, setValidated] = useState(false);

    const handleSubmit = e => {
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
          e.preventDefault();
          e.stopPropagation();
        }        
        e.preventDefault();
    
        setValidated(true);

        firebase.auth().createUserWithEmailAndPassword(emailSignUp, passwordSignUp).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;

            console.log(errorCode, errorMessage);
            // ...
          }).then(() => {
              var user = firebase.auth().currentUser;

              user.updateProfile({displayName: userName});
                setEmailSignUp("");
                setUserName("");
                setPasswordSignUp("");
                setValidated(false);
          });
      };

      console.log(firebase.auth().currentUser)

    return (
        <div>
            <h1>Sign Up</h1>
            <Container>
              <Row>
                <Col sm={6}>
                  <Form data-netlify="true" name="signupform" noValidate validated={validated} onSubmit={handleSubmit}>
                          <Form.Group controlId="formUserName">
                          <Form.Label>User Name</Form.Label>
                          <Form.Control type="email" placeholder="Enter User Name" value={userName} onChange={e => setUserName(e.currentTarget.value)}/>
                          </Form.Group>
                          <Form.Group controlId="formEmailSignUp">
                          <Form.Label>Email address</Form.Label>
                          <Form.Control type="email" placeholder="Enter Email" value={emailSignUp} onChange={e => setEmailSignUp(e.currentTarget.value)}/>
                          </Form.Group>
                          <Form.Group controlId="formPasswordSignUp">
                          <Form.Label>Password</Form.Label>
                          <Form.Control type="textarea" placeholder="Enter Password..." value={passwordSignUp} onChange={e => setPasswordSignUp(e.currentTarget.value)}/>
                          </Form.Group>
                          <Button variant="primary" type="submit">Submit</Button>
                      </Form>
                </Col>
                <Col sm={6}></Col>
              </Row>
            </Container>
            
                
        </div>
    )
}

export default LoginForm;