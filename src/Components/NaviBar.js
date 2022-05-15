import React from "react";
import {Navbar, Nav, Button, Container, NavDropdown, OverlayTrigger, Tooltip, Modal, Image} from 'react-bootstrap';
import {Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Modals from "./../Modal"
import ".././styles.css";
import MMA from "./../images/MMA.png"
import rnf from "./../images/rnf.png"
import MCA2 from "./../images/MCA2.png"
import RFFI from "./../images/RFFI.png"

export default function NaviBar() {

  return (

    <>
      <Navbar collapseOnSelect scrolling transparent expand="md" className="text-white">
        <Container className="py-1">
        <Navbar.Brand href="/"  className="text-white" >Обратные задачи</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/main" className="text-white"><u>Главная</u></Nav.Link>
            <Nav.Link href="/modeling" className="text-white"><u>Моделирование</u></Nav.Link>
            <NavDropdown text-white title={<span className="text-white"><u>Статистика</u></span>} id="collasible-nav-dropdown">
              <NavDropdown.Item href="/covid19" >Коронавирус</NavDropdown.Item>
              <NavDropdown.Item href="/flu" >Грипп</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3" >Туберкулез</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3" >ВИЧ</NavDropdown.Item>

            </NavDropdown>
          </Nav>
          <Nav>
          <div align="right" style={{ width: '2.5rem' }} className = "mx-4">
          <Image variant="bottom" className = "mx-3"
          src="https://covid19-modeling.ru/wp-content/uploads/2020/11/ip_head_with_trans-55x55.png"
          roundedCircle
          fluid
          style={{ width: '2.5rem' }, {height: '2.5rem'}}
          />
          </div>

          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}
