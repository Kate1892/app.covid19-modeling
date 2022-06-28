import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Card, Row, Col, Image, Button, Nav, NavDropdown, Table, Stack} from 'react-bootstrap';
import Axios from "axios"
import FileDownload from "js-file-download"
import CollapseParamCSV from './CollapseParamCSV'
import AltayG from ".././images/gerbs/Altay_region_gerb.png"
import OmskG from ".././images/gerbs/Omsk_region_gerb.png"
import HSKG from ".././images/gerbs/Novosibirsk_region_gerb.png"


function CovidDataFiles() {

  const [first, setFirst] = useState(true)
  const [second, setSecond] = useState(true)
  const [third, setThird] = useState(true)

  return (
    <div className="bg-white">
    <Stack gap={3}>
      <a href="https://covid19-modeling.ru/data/novosibirsk-region-data.csv" style={{'text-decoration': 'none'}}  className="">
    {first? <div className=""  onMouseEnter = {()=>{setFirst(false)}} onMouseLeave={()=>{setFirst(true)}} >
    <Row>
      <Stack direction="horizontal" gap={3}>
      <Col lg={8} md={8} xs={8} sm={8}>
        <Stack direction="horizontal" gap={3}>
        <div className=" " >
          <Image variant="top" style={{ width: '3rem' }, {height: '3rem'}} className="my-1"
          src={HSKG}
          rounded
          fluid
          />
          </div>
        <div className=""><small>Новосибирская область</small></div></Stack></Col>
        <Col lg={4} md={4} xs={4} sm={4}>
        <div className=" "><Button variant="link" className="text-secondary" ><small>Скачать csv</small></Button></div></Col></Stack></Row>
      </div> :
      <div className="bg-light"   onMouseEnter = {()=>{setFirst(false)}} onMouseLeave={()=>setFirst(true)}>
      <Row>
        <Stack direction="horizontal" gap={3}>
        <Col lg={8} md={8} xs={8} sm={8}>
          <Stack direction="horizontal" gap={3}>
          <div className=" " >
            <Image variant="top" style={{ width: '3rem' }, {height: '3rem'}} className="my-1"
            src={HSKG}
            rounded
            fluid
            />
            </div>
          <div className=" "><small>Новосибирская область</small></div></Stack></Col>
          <Col lg={4} md={4} xs={4} sm={4}>
          <div className=" "><Button variant="link" className="text-secondary" ><small>Скачать csv</small></Button></div></Col></Stack></Row>
      </div>}
      </a>
      <a href="https://covid19-modeling.ru/data/omsk-region-data.csv" style={{'text-decoration': 'none'}}  >
      {second?   <div className=" " onMouseEnter = {()=>{setSecond(false)}} onMouseLeave={()=>{setSecond(true)}} >
      <Row>
        <Stack direction="horizontal" gap={3}>
        <Col lg={8} md={8} xs={8} sm={8}>
          <Stack direction="horizontal" gap={3}>
          <div className="">
            <Image variant="top" style={{ width: '3rem' }, {height: '3rem'}} className="my-1"
            src={OmskG}
            rounded
            fluid
            />
          </div>
          <div className=""><small>Омская область</small></div></Stack></Col>
          <Col lg={4} md={4} xs={4} sm={4}>
          <div className=""><Button variant="link" className="text-secondary"><small>Скачать csv</small></Button></div></Col></Stack></Row>
        </div> :
        <div className="bg-light "  onMouseEnter = {()=>{setSecond(false)}} onMouseLeave={()=>{setSecond(true)}}>
        <Row>
          <Stack direction="horizontal" gap={3}>
          <Col lg={8} md={8} xs={8} sm={8}>
            <Stack direction="horizontal" gap={3}>
            <div className="">
              <Image variant="top" style={{ width: '3rem' }, {height: '3rem'}} className="my-1"
              src={OmskG}
              rounded
              fluid
              />
            </div>
            <div className=""><small>Омская область</small></div></Stack></Col>
            <Col lg={4} md={4} xs={4} sm={4}>
            <div className=""><Button variant="link" className="text-secondary"><small>Скачать csv</small></Button></div></Col></Stack></Row>
        </div>}</a>
        <a href="https://covid19-modeling.ru/data/altay-region-data.csv" style={{'text-decoration': 'none'}} >
        {third? <div className="" onMouseEnter = {()=>{setThird(false)}} onMouseLeave={()=>{setThird(true)}}>
        <Row>
          <Stack direction="horizontal" gap={3}>
          <Col lg={8} md={8} xs={8} sm={8}>
            <Stack direction="horizontal" gap={3}>
            <div className="">
              <Image variant="top" style={{ width: '3rem' }, {height: '3rem'}} className="my-1"
              src={AltayG}
              roundedCircle
              fluid
              />
            </div>
            <div className=""><small>Алтайский край</small></div></Stack>
            </Col>
            <Col lg={4} md={4} xs={4} sm={4}>
            <div className=""><Button variant="link" className="text-secondary"><small>Скачать csv</small></Button></div></Col>
            </Stack>
        </Row>
        </div> :
        <div className="bg-light "  onMouseEnter = {()=>{setThird(false)}} onMouseLeave={()=>{setThird(true)}}>
        <Row>
          <Stack direction="horizontal" gap={3}>
          <Col lg={8} md={8} xs={8} sm={8}>
            <Stack direction="horizontal" gap={3}>
            <div className="bg-light ">
              <Image variant="top" style={{ width: '3rem' }, {height: '3rem'}} className="my-1"
              src={AltayG}
              roundedCircle
              fluid
              />
            </div>
            <div className="bg-light "><small>Алтайский край</small></div></Stack>
            </Col>
            <Col lg={4} md={4} xs={4} sm={4}>
            <div className="bg-light "><Button variant="link" className="text-secondary"><small>Скачать csv</small></Button></div></Col>
              </Stack>
        </Row>
        </div> }</a>

    </Stack>
<CollapseParamCSV/>
    </div>
  )
}
export default CovidDataFiles;
