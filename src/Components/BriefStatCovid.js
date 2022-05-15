import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Row, Card, CardGroup, Col, Container, Image} from 'react-bootstrap';


function BriefStat() {
  return (
    <>
    <Container className="my-5">
      <Row className="justify-content-md-center">
        <Row>
          <Col>
            <Row>
              <Col>
                <Card border="light" style={{ width: '18rem' }} className="mx-auto">
                  <Card.Body>
                    <Card.Title className="text-center text-secondary"><h6>Вакцинация</h6></Card.Title>

                    <Container style={{ width: '9rem' }, {height: '9rem'}}>
                    </Container>
                    <Card.Title className="text-center text-primary"><h1>65,6 %</h1></Card.Title>
                    <Card.Text>
                      Населения вакцинированны полностью.
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer className="bg-white">
                    <small className="text-muted"><p className="text-center">По данным на 24.03.2022.</p></small>
                  </Card.Footer>
                </Card>
              </Col>
              <Col>  <Card border="light" style={{ width: '18rem' }} className="mx-auto">
                  <Card.Body>
                    <Card.Title className="text-center text-secondary"><h6>Госпитализировано</h6></Card.Title>

                    <Container style={{ width: '9rem' }, {height: '9rem'}}>
                    <Image variant="top"
                    src="ng"
                    roundedCircle
                    fluid
                    />
                    </Container>
                    <Card.Title className="text-center text-primary"><h1>4 540</h1></Card.Title>
                    <Card.Text>
                      Населения вакцинированны полностью.
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer className="bg-white">
                    <small className="text-muted"><p className="text-center">По данным на 24.03.2022.</p></small>
                  </Card.Footer>
                </Card>
              </Col>
            </Row>
          </Col>
          <Col>
            <Row>
              <Col>  <Card border="light" style={{ width: '18rem' }} className="mx-auto">
                  <Card.Body>
                    <Card.Title className="text-center text-secondary"><h6>Выздоровело</h6></Card.Title>

                    <Container style={{ width: '9rem' }, {height: '9rem'}}>
                    <Image variant="top"
                    src="ng"
                    roundedCircle
                    fluid
                    />
                    </Container>
                    <Card.Title className="text-center text-primary"><h1>66 476</h1></Card.Title>
                    <Card.Text>
                      Населения вакцинированны полностью.
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer className="bg-white">
                    <small className="text-muted"><p className="text-center">По данным на 24.03.2022.</p></small>
                  </Card.Footer>
                </Card>
              </Col>
              <Col>  <Card border="light" style={{ width: '18rem' }} className="mx-auto">
                  <Card.Body>
                    <Card.Title className="text-center text-secondary"><h6>Выявлено</h6></Card.Title>

                    <Container style={{ width: '9rem' }, {height: '9rem'}}>
                    <Image variant="top"
                    src="ng"
                    roundedCircle
                    fluid
                    />
                    </Container>
                    <Card.Title className="text-center text-primary"><h1>25 387</h1></Card.Title>
                    <Card.Text>
                      Населения вакцинированны полностью.
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer className="bg-white">
                    <small className="text-muted"><p className="text-center">По данным на 24.03.2022.</p></small>
                  </Card.Footer>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </Row>
    </Container>
  </>
  )
}
export default BriefStat;
