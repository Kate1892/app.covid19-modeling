import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Card, Row, Col, Image, Button, Nav, NavDropdown, Table, Stack} from 'react-bootstrap';
import Axios from "axios"
import FileDownload from "js-file-download"
import CollapseParamCSV from './CollapseParamCSV'



const download=(e, region_name)=>{
   e.preventDefault()
   Axios({
      url:'http://89.253.218.66:4000/api/CovidStaticFiles',
       method: "POST",
       data: {region_name},
     })
     .then((res)=>{
     console.log(res);
     FileDownload(res.data, region_name+'-region-data.csv')
   })
}

function CovidDataFiles() {

  const [first, setFirst] = useState(true)
  const [second, setSecond] = useState(true)
  const [third, setThird] = useState(true)

  return (
    <div className="bg-white">
    <Stack gap={3}>
    {first? <div className="" onClick={(e)=>download(e, "novosibirsk")} onMouseEnter = {()=>{setFirst(false)}} onMouseLeave={()=>{setFirst(true)}} >
    <Row>
      <Stack direction="horizontal" gap={3}>
      <Col lg={8} md={8} xs={8} sm={8}>
        <Stack direction="horizontal" gap={3}>
        <div className=" " >
          <Image variant="top" style={{ width: '3rem' }, {height: '3rem'}} className="my-1"
          src="https://covid19-modeling.ru/wp-content/uploads/2021/06/Novosibirsk_region_gerb.png"
          rounded
          fluid
          />
          </div>
        <div className=" "><small>Новосибирская область</small></div></Stack></Col>
        <Col lg={4} md={4} xs={4} sm={4}>
        <div className=" "><Button variant="link" className="text-secondary" ><small>Скачать csv</small></Button></div></Col></Stack></Row>
      </div> :
      <div className="bg-light" onClick={(e)=>download(e, "novosibirsk")}  onMouseEnter = {()=>{setFirst(false)}} onMouseLeave={()=>setFirst(true)}>
      <Row>
        <Stack direction="horizontal" gap={3}>
        <Col lg={8} md={8} xs={8} sm={8}>
          <Stack direction="horizontal" gap={3}>
          <div className=" " >
            <Image variant="top" style={{ width: '3rem' }, {height: '3rem'}} className="my-1"
            src="https://covid19-modeling.ru/wp-content/uploads/2021/06/Novosibirsk_region_gerb.png"
            rounded
            fluid
            />
            </div>
          <div className=" "><small>Новосибирская область</small></div></Stack></Col>
          <Col lg={4} md={4} xs={4} sm={4}>
          <div className=" "><Button variant="link" className="text-secondary" ><small>Скачать csv</small></Button></div></Col></Stack></Row>
      </div>}
      {second?   <div className=" " onClick={(e)=>download(e, "omsk")} onMouseEnter = {()=>{setSecond(false)}} onMouseLeave={()=>{setSecond(true)}} >
      <Row>
        <Stack direction="horizontal" gap={3}>
        <Col lg={8} md={8} xs={8} sm={8}>
          <Stack direction="horizontal" gap={3}>
          <div className="">
            <Image variant="top" style={{ width: '3rem' }, {height: '3rem'}} className="my-1"
            src="https://covid19-modeling.ru/wp-content/uploads/2021/06/Omsk_region_gerb-255x300.png"
            rounded
            fluid
            />
          </div>
          <div className=""><small>Омская область</small></div></Stack></Col>
          <Col lg={4} md={4} xs={4} sm={4}>
          <div className=""><Button variant="link" className="text-secondary"><small>Скачать csv</small></Button></div></Col></Stack></Row>
        </div> :
        <div className="bg-light " onClick={(e)=>download(e, "omsk")} onMouseEnter = {()=>{setSecond(false)}} onMouseLeave={()=>{setSecond(true)}}>
        <Row>
          <Stack direction="horizontal" gap={3}>
          <Col lg={8} md={8} xs={8} sm={8}>
            <Stack direction="horizontal" gap={3}>
            <div className="">
              <Image variant="top" style={{ width: '3rem' }, {height: '3rem'}} className="my-1"
              src="https://covid19-modeling.ru/wp-content/uploads/2021/06/Omsk_region_gerb-255x300.png"
              rounded
              fluid
              />
            </div>
            <div className=""><small>Омская область</small></div></Stack></Col>
            <Col lg={4} md={4} xs={4} sm={4}>
            <div className=""><Button variant="link" className="text-secondary"><small>Скачать csv</small></Button></div></Col></Stack></Row>
        </div>}
        {third? <div className="" onClick={(e)=>download(e, "altay")} onMouseEnter = {()=>{setThird(false)}} onMouseLeave={()=>{setThird(true)}}>
        <Row>
          <Stack direction="horizontal" gap={3}>
          <Col lg={8} md={8} xs={8} sm={8}>
            <Stack direction="horizontal" gap={3}>
            <div className="">
              <Image variant="top" style={{ width: '3rem' }, {height: '3rem'}} className="my-1"
              src="https://covid19-modeling.ru/wp-content/uploads/2021/06/Altay_region_gerb-289x300.png"
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
        <div className="bg-light " onClick={(e)=>download(e, "altay")} onMouseEnter = {()=>{setThird(false)}} onMouseLeave={()=>{setThird(true)}}>
        <Row>
          <Stack direction="horizontal" gap={3}>
          <Col lg={8} md={8} xs={8} sm={8}>
            <Stack direction="horizontal" gap={3}>
            <div className="bg-light ">
              <Image variant="top" style={{ width: '3rem' }, {height: '3rem'}} className="my-1"
              src="https://covid19-modeling.ru/wp-content/uploads/2021/06/Altay_region_gerb-289x300.png"
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
        </div> }

    </Stack>
<CollapseParamCSV/>
    </div>
  )
}
export default CovidDataFiles;
