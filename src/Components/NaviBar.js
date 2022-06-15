import React from "react";
import {Navbar, Nav, Button, Container, NavDropdown, OverlayTrigger, Tooltip, Modal, Image} from 'react-bootstrap';
import {Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import ".././styles.css";
import Modals from "./../Modal"
import ".././styles.css";

export default function NaviBar() {

  return (

    <>
      <Navbar collapseOnSelect scrolling transparent expand="md" className="text-white">
        <Container className="py-1">
        <Navbar.Brand href="#"  className="text-white" href="./">
        <Image variant="bottom" className = "mx-3" href="./"
        src="https://covid19-modeling.ru/wp-content/uploads/2020/11/ip_head_with_trans-55x55.png"
        roundedCircle
        fluid
        style={{ width: '2rem' }, {height: '2rem'}}
        />{' '}
        Обратные задачи</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link><Link to="/" className="text-white"><u>Главная</u></Link></Nav.Link>
            <Nav.Link><Link to="/modeling" className="text-white"><u>Моделирование</u></Link></Nav.Link>
            <NavDropdown text-white title={<span className="text-white"><u>Статистика</u></span>} id="collasible-nav-dropdown">
              <NavDropdown.Item> <Link to="/covid19" className="text-black">Коронавирус</Link></NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}
