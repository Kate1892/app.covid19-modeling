import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form, Button, Container, FloatingLabel} from 'react-bootstrap';


export const Registration= () => (
  <>
  <Container className="my-5">
    <Form>
    <Container className="my-2">
      <Form.Text className="text-muted text-center">
        Войти для просмотра сохраненных сценариев развития эпидемий.
        </Form.Text>
    </Container>
    <>
      <FloatingLabel
        controlId="floatingInput"
        label="Логин"
        className="mb-3"
      >
        <Form.Control type="email" placeholder="name@example.com" />
      </FloatingLabel>
      <FloatingLabel controlId="floatingPassword" label="Пароль">
        <Form.Control type="password" placeholder="Password" />
      </FloatingLabel>
      </>
      <Form.Group className="mb-5" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Сохранить введенные данные" />
      </Form.Group>
    </Form>
  </Container>
</>
)
