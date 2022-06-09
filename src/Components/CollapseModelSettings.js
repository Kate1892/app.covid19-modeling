import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Collapse, Card, Nav, NavDropdown, Table, Container, Fade, ListGroup,
Row, Popover, Col, Stack, Form, OverlayTrigger, FormControl} from 'react-bootstrap';
import { Formik } from "formik";
import * as yup from "yup";
import {BsFillCaretRightFill, BsFillCaretDownFill} from 'react-icons/bs'
import CovidDataFiles from './CovidDataFiles'
const schema = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
});


function CollapseModelSettings() {
  const [open, setOpen] = useState(false);

  return (
    <>
    <div className="d-grid gap-2">
    <ListGroup className = "mx-3 my-1">
      <ListGroup.Item  align="left" className="bg-secondary text-white"
      onClick={() => setOpen(!open)}
      aria-controls="example-fade-text"
      aria-expanded={open}
      >
      {open? <BsFillCaretDownFill size = {15}/> : <BsFillCaretRightFill size = {15}/>} Данные</ListGroup.Item>

      <Collapse in={open}>
        <div id="example-collapse-text">

        <ListGroup.Item variant="light">
      <CovidDataFiles />

    </ListGroup.Item>
</div>
</Collapse>
  </ListGroup>

    </div>
    </>
  );
}

export default CollapseModelSettings;
