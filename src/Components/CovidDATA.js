import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavModeling from './NavModeling';
import {Container, Card, Row, Col, Image, Button, Nav, NavDropdown, Table} from 'react-bootstrap';
import Axios from "axios"
import FileDownload from "js-file-download"
import CollapseParamCSV from './CollapseParamCSV'



const downloadN=(e)=>{
   e.preventDefault()
   Axios({
     url:"http://localhost:4000/api/n",
     method: "GET"
   }).then((res)=>{
     console.log(res);
     FileDownload(res.data, "novosibirsk-region-data.csv")
   })
}

const downloadA=(e)=>{
   e.preventDefault()
   Axios({
     url:"http://localhost:4000/api/a",
     method: "GET",
     responseType:"blob"
   }).then((resA)=>{
     console.log(resA);
     FileDownload(resA.data, "altay-region-data.csv")
   })
}

const downloadO=(e)=>{
   e.preventDefault()
   Axios({
     url:"http://localhost:4000/api/o",
     method: "GET",
     responseType:"blob"
   }).then((resO)=>{
     console.log(resO);
     FileDownload(resO.data, "omsk-region-data.csv")
   })
}

function CovidDATA() {

  return (
    <div className="bg-white">
    <Card className="text-center ">
    <Container >

    <h3 className="text-center text-white" >.</h3>

  </Container>
      <Container >

      <h3 className="text-center" >Covid-19</h3>

    </Container>
    <Container className="my-3">
      <Container className="my-1">
      <Row className="justify-content-md-center text-center">
          <Col xs={20} md={4}>
                <Card border="light" style={{ width: '25rem' }} className="mx-auto" class="shadow-sm">
                <Container style={{ width: '10rem' }, {height: '10rem'}}>
                <Image variant="top" style={{ width: '10rem' }, {height: '10rem'}} className="my-1"
                src="https://covid19-modeling.ru/wp-content/uploads/2021/06/Novosibirsk_region_gerb.png"
                rounded
                onClick={(e)=>downloadA(e)}
                fluid
                />
                </Container>
                  <Card.Body>
                    <Card.Title className="text-center">Новосибирская область</Card.Title>
                      <Button variant="link" className="text-secondary" onClick={(e)=>downloadN(e)}>Скачать csv</Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={20} md={4}>
              <Card border="light" style={{ width: '25rem' }} className="mx-auto" class="shadow-sm">
              <Container style={{ width: '10rem' }, {height: '10rem'}}>
              <Image variant="top" style={{ width: '10rem' }, {height: '10rem'}} className="my-1"
              src="https://covid19-modeling.ru/wp-content/uploads/2021/06/Omsk_region_gerb-255x300.png"
              rounded
              fluid
              onClick={(e)=>downloadA(e)}
              />
              </Container>
                <Card.Body>
                  <Card.Title className="text-center">Омская область</Card.Title>
                  <Button variant="link" className="text-secondary" onClick={(e)=>downloadO(e)}>Скачать csv</Button>
                </Card.Body>
              </Card>
          </Col>
            <Col  xs={20} md={4}>
                <Card border="light" style={{ width: '25rem' }} className="mx-auto" class="shadow-sm">
                <Container style={{ width: '10rem' }, {height: '10rem'}}>
                <Image variant="top" style={{ width: '10rem' }, {height: '10rem'}} className="my-1"
                src="https://covid19-modeling.ru/wp-content/uploads/2021/06/Altay_region_gerb-289x300.png"
                roundedCircle
                fluid
                onClick={(e)=>downloadA(e)}
                />
                </Container>
                  <Card.Body>
                    <Card.Title className="text-center">Алтайский край</Card.Title>
                    <Button variant="link" className="text-secondary" onClick={(e)=>downloadA(e)}>Скачать csv</Button>
                  </Card.Body>
                </Card>
              </Col>
      </Row>
    </Container>
    </Container>
    <CollapseParamCSV/>
      </Card>
    </div>
  )
}
export default CovidDATA;
