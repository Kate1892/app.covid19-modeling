import React from "react";
import {Navbar, Nav, Button, Container, NavDropdown, OverlayTrigger, Tooltip, Modal, Image} from 'react-bootstrap';
import {Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Modals from "./../Modal"
import ".././styles.css";

function NaviBarv2() {

  return (

    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container className="py-1">
        <Navbar.Brand href="#"  className="text-white">
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
          <Nav.Link><Link to="/" className="text-light"><u>Главная</u></Link></Nav.Link>
          <Nav.Link><Link to="/modeling" className="text-light"><u>Моделирование</u></Link></Nav.Link>
          <NavDropdown text-white title={<span className="text-light"><u>Статистика</u></span>} id="collasible-nav-dropdown">
            <NavDropdown.Item> <Link to="/covid19" className="text-black text-muted">Коронавирус</Link></NavDropdown.Item>
          </NavDropdown>
        </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}
export default NaviBarv2;
