import React from "react";
import {Container, Card, Image, Col} from 'react-bootstrap';

const TeamItem = (props) => {
    return (
      <Col xs= {20} md={6} lg={4} className="my-1">
      <Card border="light" style={{height: '15rem'}} className="mx-auto" >
      <Container style={{ width: '10rem' }, {height: '10rem'}} className="my-1 text-center">
        <Image variant="bottom"
        src={props.post.image}
        roundedCircle
        fluid
        style={{ maxWidth: '9rem' } }
        />
      </Container>
        <Card.Body>
          <Card.Title className="text-center">{props.post.name}</Card.Title>
          <Card.Text className="text-center">
            {props.post.institution}
          </Card.Text>
        </Card.Body>
      </Card>
      </Col>
    )
}

export default TeamItem;
