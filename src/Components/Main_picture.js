import React from "react";
import {Container, Card, Image, Col, Row, Button} from 'react-bootstrap';
import NaviBar from './NaviBar';

const Main_picture = () => {
    return (
      <Card  border="light" style={{
        backgroundImage: `url("https://ega.ee/wp-content/uploads/2020/08/corona_1.jpg")`,
        height:'680px',
      }}>
      <NaviBar />
      <div className="my-auto" style={{ "margin-left": "6rem"}}>

      <h1 className="text-white" ><b>Математическое моделирование</b></h1>
      <h1 className="text-white"><b>распространения инфекционных заболеваний</b></h1>
      <div className="text-white"><i>Суперкомпьютерный анализ, математическое моделирование и </i></div>
      <div className="text-white "><i>построение сценариев социально-экономического развития</i></div>
      <div className="text-white"><i>Новосибирской области в условиях пандемии COVID-19</i></div>

      <div><Button href="/modeling" className="text-white my-3 py-2" variant="info" size="sm">
            <div style={{fontSize: 16}}>Перейти к моделированию</div>
          </Button></div>
      </div>
      <Row className="my-auto" style={{
              width: "100%" }}>
      <Col xs= {12} md={6} lg={6}>
      </Col>
      <Col xs= {12} md={6} lg={6}>
      <div style={{"margin-right": "6rem" }}>
      <div align="right" className="text-white my-5"><i><h6>Проект поддержан Российским научным фондом (проект № 18-71-10044), Российским фондом фундаментальных исследований (проекты № 18-31-20019, № 21-51-10003) и Правительством города Новосибирска.</h6></i></div>
      </div>
      </Col>
      </Row>
    </Card>
    )
}

export default Main_picture;
