import React from "react";
import {Container, Card, Image, Col, Row} from 'react-bootstrap';

const ConferenseItem = (props) => {
    return (
      <Col className="my-3">
      <a href={props.conf.href}>
        <Card border="light" style={{ width: '18rem' }} className="mx-auto align-center"  >
        <Container style={{ width: '9rem' }, {height: '9rem'}} className=" text-center">
        <Image variant="top"  className="my-5" style={{ width:  props.conf.width}, {height: props.conf.height}}
        src={props.conf.image}
        roundedCircle={props.conf.rounded}
        fluid
        />
        </Container>
          <Card.Body>
            <Card.Title className="text-center"><a href="http://conf.nsc.ru/tcmiip2021" className="nav-link d-inline text-black" target="_blank" rel="noopener noreferrer">{props.conf.name}</a></Card.Title>
          </Card.Body>
        </Card>
        </a>
      </Col>
    )}

export default ConferenseItem;
