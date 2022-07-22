import {Navbar, Nav, Button, Container, NavDropdown, OverlayTrigger, Tooltip, Modal, Image, Stack} from 'react-bootstrap';
import {NavLink} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import ".././styles.css";

import ip_head from "../images/ip_head.png"

const setActive=({isActive}) => isActive ? 'active-link' : 'non-active';
export default function NaviBar() {

  return (

    <>
      <Navbar collapseOnSelect expand="md" className="text-white">
        <Container className="py-1">
        <Navbar.Brand className="text-white ">
        <Stack direction="horizontal" gap={3}>
        <Image variant="bottom" className = ""
        src={ip_head}
        roundedCircle
        fluid
        style={{ width: '3rem' }, {height: '3rem'}}
        />{' '}
      <h3>Обратные задачи</h3></Stack></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto" className="justify-content-end flex-grow-1 pe-4" >
            <Nav.Link><NavLink to="/"
            className={setActive}><h5>Главная</h5></NavLink></Nav.Link>
            <Nav.Link><NavLink to="/modeling"
            className={setActive}><h5>Моделирование</h5></NavLink></Nav.Link>
            <Nav.Link><NavLink to="/data"
            className={setActive}><h5>Данные</h5></NavLink></Nav.Link>
            <h5><NavDropdown title={<span className="fdrop">Статистика</span>} id="collasible-nav-dropdown">
              <NavDropdown.Item> <NavLink to="/statistics" className={({isActive}) => isActive ? 'active-link' : 'text-secondary'}>Коронавирус</NavLink></NavDropdown.Item>
            </NavDropdown></h5>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}
