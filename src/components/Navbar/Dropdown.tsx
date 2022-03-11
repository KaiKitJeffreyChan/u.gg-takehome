import React, { useState } from 'react'
import './Dropdown.css'
import { CSSTransition } from 'react-transition-group'

const Dropdown = (props: any) => {

    const [toggleMenu, setToggleMenu] = useState("main");

    const DropdownItem = (props: any) => {
        return (
            <a href="#" className="dropdown-item" onClick={() => props.goToMenu && setToggleMenu(props.goToMenu)}>
                <span className="icon-button">{props.leftIcon}</span>
                {props.children}
                <span className="icon-right">{props.rightIcon}</span>
            </a>
        )
    }
    return (
        <div className="dropdown">
            <CSSTransition in={toggleMenu === "main"} unmountOnExit timeout={500} classNames="menu-primary">
                <div className="menu">
                    <DropdownItem>My Profile</DropdownItem>
                    <DropdownItem
                        leftIcon={<i className="cis-cog"></i>}
                        rightIcon={<i className="cis-cog"></i>}
                        goToMenu="settings"
                    >Settings</DropdownItem>
                </div>
            </CSSTransition>
            <CSSTransition in={toggleMenu === "settings"} unmountOnExit timeout={500} classNames="menu-secondary">
                <div className="menu">
                    <DropdownItem leftIcon={<i className="cis-cog"></i>} goToMenu="main">Back</DropdownItem >
                    <DropdownItem />
                    <DropdownItem />
                    <DropdownItem />
                    <DropdownItem />
                    <DropdownItem />
                    <DropdownItem />
                    <DropdownItem />
                    <DropdownItem />
                </div>
            </CSSTransition>
        </div>
    )
}

export default Dropdown
