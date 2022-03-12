import React from 'react';
import './Navbar.css'
import NavButton from './NavButton'
import Dropdown from './Dropdown'
import { AiOutlinePlus } from 'react-icons/ai';
import { RiRocketFill } from 'react-icons/ri';
import { MdOutlineArrowDropDown } from 'react-icons/md'

import logo from '../../assets/NavbarImages/onlyguides.png';
import beta from '../../assets/NavbarImages/beta.png';
import UserIcon from '../../assets/NavbarImages/UserIcon.png'
import Moon from '../../assets/NavbarImages/Moon.png'
import Bell from '../../assets/NavbarImages/Bell.png'

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-content-container">
                <span className="navbar-content--left">
                    <span className="logo">
                        <img src={logo} className="logo-onlyguides" />
                        <img src={beta} className="logo-beta" />
                    </span>
                    <a className="games">Games<MdOutlineArrowDropDown /></a>
                    <a className="kickoff-contest"><RiRocketFill className="rocket" /> Kickoff Contest</a>
                    <input className="search" placeholder="Search for guides..." />
                </span>
                <span className="navbar-content--right">
                    <button className="nav-button">
                        <AiOutlinePlus /> <b>Write</b>
                    </button>
                    <div className="line" />
                    <NavButton icon={Bell} />
                    <NavButton icon={Moon} />
                    <NavButton icon={UserIcon} >
                        <Dropdown>
                        </Dropdown>
                    </NavButton>
                </span>
            </div>
        </nav>

    )
}

export default Navbar
