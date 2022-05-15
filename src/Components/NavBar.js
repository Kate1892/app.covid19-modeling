import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Nav, Button, Container, NavDropdown, OverlayTrigger, Tooltip, Modal, Image} from 'react-bootstrap';
const Navbar = () => {

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const closeMenu = () => setClick(false)

    return (
        <div className='header'>
            <nav className='navbar'>
                <a href='/' className='logo'>
                  Обратные задачи
                </a>
                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaTimes size={30} style={{ color: '#ffffff' }} />)
                        : (<FaBars size={30} style={{ color: '#ffffff' }} />)}

                </div>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                <li className='nav-item'>
                    <a href='/main' onClick={closeMenu}>Главная</a>
                </li>
                    <li className='nav-item'>
                        <a href='/modeling' onClick={closeMenu}>Моделирование</a>
                    </li>
                    <li className='nav-item'>
                        <a href='/covid' onClick={closeMenu}>Статистика</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
