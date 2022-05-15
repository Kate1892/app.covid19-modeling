import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Collapse, NavDropdown, Container, Card, Row, Col} from 'react-bootstrap';



function Novosibirskinfo() {
const [open, setOpen] = useState(false);

  return (
    <>
        <Row>
        <Col xs={6} md={4} >
        <h4
          onClick={() => setOpen(!open)}
          aria-controls="example-collapse-text"
          aria-expanded={open}
          className="mx-3 my-3 text-success">
          Новосибирская область
        </h4>
        </Col>
        <Col xs={12} md={8}>
        <div className="my-2">-субъект Российской Федерации. Входит в состав Сибирского федерального округа. Административный центр — город Новосибирск. Население: 2 779 375 ч.
         Площадь: 177 756 км². Плотность: 15,64 чел./км². </div>
        </Col>
      </Row>


        <Collapse in={open}>
          <div id="example-collapse-text">
          <Card className="mx-3 my-2">
           <p className="mx-5">-субъект Российской Федерации. Входит в состав Сибирского федерального округа. Административный центр — город Новосибирск.</p>
           <p className="mx-5">Население: 2 779 375 ч.</p>
            <p className="mx-5">Площадь: 177 756 км²</p>
            <p className="mx-5">Плотность: 15,64 чел./км²</p>
            </Card>
          </div>
        </Collapse>
</>
)
}
export default Novosibirskinfo;
