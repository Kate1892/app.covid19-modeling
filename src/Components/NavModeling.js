import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Collapse, Card, Nav, NavDropdown, Table, Container, Fade, Tabs, Tab, Sonnet} from 'react-bootstrap';
import Axios from "axios"
import FileDownload from "js-file-download"
import CollapseParamCSV from './CollapseParamCSV'
import CovidDATA from './CovidDATA'

function NavModeling() {

  return (
    <>

    <div className="my-3">

    <Tabs justify defaultActiveKey="covid" id="uncontrolled-tab-example" >

      <Tab eventKey="covid" title="Коронавирус">
        <CovidDATA />
      </Tab>
      <Tab eventKey="flu" title="Грипп">
        <h3>Данные по гриппу</h3>
      </Tab>
      <Tab eventKey="tub" title="Туберкулез">
        <h3>Данные по Туберкулёзу</h3>
      </Tab>
      <Tab eventKey="HIV" title="ВИЧ">
        <h3>Данные по ВИЧ</h3>
      </Tab>
    </Tabs>

    </div>
    </>
  )
}
export default NavModeling;
