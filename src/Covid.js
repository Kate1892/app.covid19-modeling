import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles.css";
import NaviBarv2 from './Components/NaviBarv2';

import * as axios from "axios";
import Axios from "axios"
import BriefStatCovid from './Components/BriefStatCovid'
import CollapseModelSettings from './Components/CollapseModelSettings'
import {Container, Row, Col, Card, ListGroup, ListGroupItem, NavDropdown, Navbar, Button, Image, Tab, Nav,
  Dropdown, ButtonGroup, DropdownButton, Carousel, OverlayTrigger, Popover} from 'react-bootstrap';

import Altayinfo from './Components/Covid_state_data_altay/Altayinfo'
import Altay_nd from './Components/Covid_state_data_altay/Altay_nd'
import  Altay_sumstat from './Components/Covid_state_data_altay/Altay_sumstat'
import  Altay_newdeath from './Components/Covid_state_data_altay/Altay_newdeath'

import Omskinfo from './Components/Covid_state_data_omsk/Omskinfo'
import Omsk_nd from './Components/Covid_state_data_omsk/Omsk_nd'
import  Omsk_sumstat from './Components/Covid_state_data_omsk/Omsk_sumstat'
import  Omsk_newdeath from './Components/Covid_state_data_omsk/Omsk_newdeath'

import Novosibirskinfo from './Components/Covid_state_data_novosibirsk/Novosibirskinfo'
import Novosibirsk_nd from './Components/Covid_state_data_novosibirsk/Novosibirsk_nd'
import  Novosibirsk_sumstat from './Components/Covid_state_data_novosibirsk/Novosibirsk_sumstat'
import  Novosibirsk_newdeath from './Components/Covid_state_data_novosibirsk/Novosibirsk_newdeath'

import 'bootstrap/dist/css/bootstrap.min.css';

import Footer from './Components/Footer'

export const Covid= () => (
  <>
  <NaviBarv2 />
  <Container className="my-3" style={{
          height: "120%" },
        {  width: "100%"}}>

  <Container>
    <h3 className="text-center my-3 text-secondary">Коронавирус</h3>
  </Container>

  <Tab.Container style={{
          width: "100%" }} id="left-tabs-example" defaultActiveKey="novosibirsk" >

      <Nav variant="pills" defaultActiveKey="/home" >
        <Nav.Item >
        <OverlayTrigger
           placement="bottom"
           overlay={
             <Popover>
               <Popover.Body>
               <div align="start" className="text-black">
               Cубъект Российской Федерации. Входит в состав Сибирского федерального округа. Административный центр — город Новосибирск.</div>
               <div>Население: 2 779 375 ч.</div>
                <div>Площадь: 177 756 км²</div>
                  <div>Плотность: 15,64 чел./км²</div>
               </Popover.Body>
             </Popover>
           }>
        <Button size="sm" variant="outline-info"  style={{color:"#FFFFFF"}}>
          <Nav.Link eventKey="novosibirsk">Новосибирская область</Nav.Link>
        </Button>
        </OverlayTrigger>
        </Nav.Item>
        <Nav.Item>
        <OverlayTrigger
           placement="bottom"
           overlay={
             <Popover>
               <Popover.Body>
               <div align="start" className="text-black">
               Cубъект Российской Федерации на юго-западе Сибири, входит в состав Сибирского федерального округа.</div>
               <div>Население: 1 879 548 ч.</div>
                <div>Площадь: 141 140 км²</div>
                  <div>Плотность: 13,32 чел./км²</div>
               </Popover.Body>
             </Popover>
           }>
        <Button size="sm" variant="outline-info"  className="mx-1">
          <Nav.Link eventKey="omsk">Омская область</Nav.Link>
          </Button>
          </OverlayTrigger>
        </Nav.Item>
        <Nav.Item>
        <OverlayTrigger
           placement="bottom"
           overlay={
             <Popover>
               <Popover.Body>
               <div align="start" className="text-black">
               Cубъект Российской Федерации. Входит в Сибирский федеральный округ, является частью Западно-Сибирского экономического района.</div>
               <div>Население: 2 268 179 ч.</div>
                <div>Площадь: 167 996 км²</div>
                  <div>Плотность: 13,5 чел./км²</div>
               </Popover.Body>
             </Popover>
           }>
        <Button  size="sm" variant="outline-info" className="mx-1">
          <Nav.Link eventKey="altay">Алтайский край</Nav.Link>
          </Button>
          </OverlayTrigger>
        </Nav.Item>
      </Nav>
    <Tab.Content>
      <Tab.Pane eventKey="novosibirsk">
      <div className="mx-3 my-3">
          <Novosibirsk_nd />
      </div>

      </Tab.Pane>
      <Tab.Pane eventKey="altay">
          <div className="mx-3 my-3">
            <Altay_nd />
            </div>

        </Tab.Pane>
        <Tab.Pane eventKey="omsk">
            <div className="mx-3 my-3">
              <Omsk_nd />
              </div>
          </Tab.Pane>
      </Tab.Content>
  </Tab.Container>
    </Container>
<Footer />

     </>
)
