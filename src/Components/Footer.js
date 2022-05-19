import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col, Image, Stack} from 'react-bootstrap';
import MMA from "./../images/MMA.png"
import RNF4 from "./../images/RNF4.png"
import MCA2 from "./../images/MCA2.png"
import RFFI from "./../images/RFFI.png"
import RF2 from "./../images/RF2.png"
import mmf3 from "./../images/mmf3.png"

function Footer() {
  return (
    <footer
  className="py-4 my-6 bg-dark navbar-fixed-bottom row-fluid">

      <Row>
      <Col xs={12} md={12} lg={6}>
      <div className="mx-5">
      <h3 className="text-white text-muted mx-auto">ИВМиМГ СО РАН</h3>
      <div className="text-white text-muted mx-auto">630090, Новосибирск, Проспект академика Лаврентьева, 6, ком.2-431</div>
        <div className="text-white text-muted mx-auto">контакты: info@covid19-modeling.ru, +7 (383) 330-84-60</div>

      <hr className="text-white mx-auto"/>
      <small align="left" className="text-center text-muted text-white mx-auto">© 2022 COVID-19 в Новосибирской области</small></div></Col>
      <Col  align="right" xs={12} md={12} lg={6}>
      <Stack align="right" direction="horizontal" gap={3} style={{"margin-left": "15rem" }}>

        <div align="left">
        <Image variant="bottom" className = "my-1"
        src={RNF4}
        fluid
        style={{ width: '2.5rem' }, {height: '2.5rem'}}
        />
        </div>
        <div align="left" >
        <Image variant="bottom" className = "mx-1"
        src={RFFI}
        fluid
        style={{ width: '3.5rem' }, {height: '3.5em'}}
        />
        </div>
        <div align="left">
        <Image variant="bottom" className = " my-1 mx-4"
        src={RF2}
        fluid
        style={{ width: '4rem' }, {height: '4rem'}}
        />
        </div>
      </Stack>
      <div align="center" style={{ width: '20rem' }, {height: '4rem'}}>
      <Image variant="bottom" className = " mx-4"
      src={mmf3}
      fluid
      style={{ width: '4rem' }, {height: '6rem'}}
      />
      </div>


      </Col>
    </Row>


    </footer>
  )
}
export default Footer;
