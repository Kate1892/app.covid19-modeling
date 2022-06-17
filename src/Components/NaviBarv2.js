import React, {useState} from "react";
import {Navbar, Nav, Button, Container, NavDropdown, OverlayTrigger, Tooltip, Modal, Image, Stack} from 'react-bootstrap';
import {NavLink} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Modals from "./../Modal"
import ".././styles.css";

const setActive=({isActive}) => isActive ? 'active-link' : 'non-active';

function NaviBarv2() {

  return (

    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" >
        <Container className="py-1">
        <Navbar.Brand className="text-white">
        <Stack direction="horizontal" gap={3}>
        <Image variant="bottom" className = ""
          src="https://covid19-modeling.ru/wp-content/uploads/2020/11/ip_head_with_trans-55x55.png"
          roundedCircle
          fluid
          style={{ width: '3rem' }, {height: '3rem'}}
          />{' '}
          <h3>Обратные задачи</h3></Stack></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto" className="justify-content-end flex-grow-1 pe-4">
          <Nav.Link><NavLink to="/" className={setActive} ><h5>Главная</h5></NavLink></Nav.Link>
          <Nav.Link><NavLink to="/modeling" className={setActive}><h5>Моделирование</h5></NavLink></Nav.Link>
          <h5><NavDropdown title={<span className="fdrop">Статистика</span>} id="collasible-nav-dropdown">
            <NavDropdown.Item> <NavLink to="/covid19" className={({isActive}) => isActive ? 'active-dropdown' : 'non-active-dropdown'} >Коронавирус</NavLink></NavDropdown.Item>
          </NavDropdown></h5>
        </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}
export default NaviBarv2;
