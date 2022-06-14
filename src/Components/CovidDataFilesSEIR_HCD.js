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

const dwnAntibodies=(e)=>{
   e.preventDefault()
   Axios
   .get("http://89.253.218.66:4000/api/CovidStaticFilesAntibodies")
     .then((res)=>{
     console.log(res);
     FileDownload(res.data, "invitro-antibodies-novosibirsk-region.csv")
   })
}

function CovidDataFilesSEIR_HCD() {

  const [first, setFirst] = useState(true)
  const [second, setSecond] = useState(true)

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
      {second?   <div className=" " onClick={(e)=>dwnAntibodies(e)} onMouseEnter = {()=>{setSecond(false)}} onMouseLeave={()=>{setSecond(true)}} >
      <Row>
        <Stack direction="horizontal" gap={3}>
        <Col lg={8} md={8} xs={8} sm={8}>
          <Stack direction="horizontal" gap={3}>
            <div className="">
              <Image variant="top" style={{ width: '2rem' }, {height: '2rem'}} className="my-1"
              src="https://upload.wikimedia.org/wikipedia/commons/a/aa/%D0%98%D0%BD%D0%B2%D0%B8%D1%82%D1%80%D0%BE_%D0%BB%D0%BE%D0%B3%D0%BE%D1%82%D0%B8%D0%BF.png"
              rounded
              fluid
              />
            </div>
            <div className=""><small>Антитела</small> </div> </Stack></Col>
            <Col lg={4} md={4} xs={4} sm={4}>
            <div className=""><Button variant="link" className="text-secondary "> <small>Скачать csv</small></Button></div></Col></Stack></Row>
        </div> :
        <div className="bg-light " onClick={(e)=>dwnAntibodies(e)} onMouseEnter = {()=>{setSecond(false)}} onMouseLeave={()=>{setSecond(true)}}>
        <Row>
          <Stack direction="horizontal" gap={3}>
          <Col lg={8} md={8} xs={8} sm={8}>
            <Stack direction="horizontal" gap={3}>
              <div className="">
                <Image variant="top" style={{ width: '2rem' }, {height: '2rem'}} className="my-1"
                src="https://upload.wikimedia.org/wikipedia/commons/a/aa/%D0%98%D0%BD%D0%B2%D0%B8%D1%82%D1%80%D0%BE_%D0%BB%D0%BE%D0%B3%D0%BE%D1%82%D0%B8%D0%BF.png"
                rounded
                fluid
                />
              </div>
              <div className=""><small>Антитела</small> </div> </Stack></Col>
              <Col lg={4} md={4} xs={4} sm={4}>
              <div className=""><Button variant="link" className="text-secondary "> <small>Скачать csv</small></Button></div></Col></Stack></Row>
        </div>}

    </Stack>
    <CollapseParamCSV/>
    </div>
  )
}
export default CovidDataFilesSEIR_HCD;
