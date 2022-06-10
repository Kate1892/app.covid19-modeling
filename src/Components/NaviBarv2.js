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

function NaviBarv2() {

  return (

    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container className="py-1">
        <Navbar.Brand href="#"  className="text-white" >
        <Image variant="bottom" className = "mx-3"
        src="https://covid19-modeling.ru/wp-content/uploads/2020/11/ip_head_with_trans-55x55.png"
        roundedCircle
        fluid
        style={{ width: '2rem' }, {height: '2rem'}}
        />{' '}
        Обратные задачи</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/"><u>Главная</u></Nav.Link>
            <Nav.Link href="/modeling "><u>Моделирование</u></Nav.Link>
            <NavDropdown title={<span><u>Статистика</u></span>} id="collasible-nav-dropdown">
              <NavDropdown.Item href="/covid19">Коронавирус</NavDropdown.Item>

            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}
export default NaviBarv2;
