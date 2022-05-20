import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col, Image, Stack} from 'react-bootstrap';
import MMA from "./../images/MMA.png"
import RNF6 from "./../images/RNF6.png"
import MCA2 from "./../images/MCA2.png"
import RFFI from "./../images/RFFI.png"
import RF2 from "./../images/RF2.png"
import mmf6 from "./../images/mmf6.png"
import ".././styles.css";

function Footer() {
  return (
    <Container>
    <footer
  className="py-4 my-6 bg-dark navbar-fixed-bottom row-fluid">
      <Row style={{
              width: "100%" }}>
      <Col xs={12} md={12} lg={6}>
      <div className="mx-5">
      <h3 className="text-white text-muted mx-auto">ИВМиМГ СО РАН</h3>
      <div className="text-white text-muted mx-auto">630090, Новосибирск, Проспект академика Лаврентьева, 6, ком.2-431</div>
        <div className="text-white text-muted mx-auto">контакты: info@covid19-modeling.ru, +7 (383) 330-84-60</div>

      <hr className="text-white mx-auto"/>
      <small align="left" className="text-center text-muted text-white mx-auto">© 2022 COVID-19 в Новосибирской области</small></div></Col>
      <Col  align="right" xs={12} md={12} lg={6}>
      <Stack direction="horizontal" gap={3} style={{"margin-left": "33%" }}>

        <div align="center">
        <Image variant="bottom" className = "my-1"
        src={RNF6}
        fluid
        style={{ width: '2.5rem' }, {height: '2.5rem'}}
        />
        </div>
        <div align="center" >
        <Image variant="bottom" className = ""
        src={RFFI}
        fluid
        style={{ width: '2.5rem' }, {height: '2.5em'}}
        />
        </div>
        <div align="center">
        <Image variant="bottom" className = ""
        src={RF2}
        fluid
        style={{ width: '2.7rem' }, {height: '2.7rem'}}
        />
        </div>
      </Stack>
      <div align="center" style={{ width: '20rem' }, {height: '4rem'}}>
      <Image variant="center" className = " my-2"
      src={mmf6}
      fluid
      style={{ width: '7rem' }, {height: '5rem'}}
      />
      </div>
      </Col>
    </Row>
    </footer>
    </Container>
  )
}
export default Footer;
