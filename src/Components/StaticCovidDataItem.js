import React, {useState} from "react";
import {Container, Card, Row, Col, Image, Button, Nav, NavDropdown, Table, Stack} from 'react-bootstrap';

const StaticCovidDataItem = (props) => {
  
    return (
      <Col xs= {12} md={4}>
      <Card border="light" style={{ width: '5rem' }, {height: '8rem'}} className="mx-2">
        <Card.Body>
        <Card.Title className="text-center text-info"><h3>{props.last.lastData}</h3></Card.Title>
        <Card.Text className="text-center">
        <small>{props.last.name}</small>
        </Card.Text>
        </Card.Body>
      <Card.Footer className="bg-white">
      <small className="text-muted"><small className="text-center">По данным на {props.last.lastDatadate}</small></small>
      </Card.Footer>
      </Card></Col>
    )
}

export default StaticCovidDataItem;
