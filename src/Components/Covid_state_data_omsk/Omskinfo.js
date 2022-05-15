import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Collapse, NavDropdown, Container, Card, Row, Col} from 'react-bootstrap';



function Omskinfo() {
const [open, setOpen] = useState(false);

  return (
    <><Row>
      <Col xs={6} md={4} >
      <h4
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
        className="mx-3 my-3 text-success">
          Омская область
      </h4>
      </Col>
      <Col xs={12} md={8}>
      <div className="my-2">-субъект Российской Федерации на юго-западе Сибири, входит в состав Сибирского федерального округа.
      Население: 1 879 548 ч. Площадь: 141 140 км². Плотность: 13,32 чел./км². </div>
      </Col>
    </Row>

        <Collapse in={open}>
          <div id="example-collapse-text">
          <Card className="mx-3 my-2">
           <p className="mx-5">-субъект Российской Федерации на юго-западе Сибири, входит в состав Сибирского федерального округа и Западно-Сибирского экономического района.</p>
           <p className="mx-5">Население: 1 879 548 ч.</p>
            <p className="mx-5">Площадь: 141 140 км²</p>
            <p className="mx-5">Плотность: 13,32 чел./км²</p>
            </Card>
          </div>
        </Collapse>
</>
)
}
export default Omskinfo;
