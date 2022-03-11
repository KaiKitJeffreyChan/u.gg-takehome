import React, { useState } from 'react';
import './Navbar.css'

const NavButton = (props: any) => {
    const [open, setOpen] = useState(false);

    return (
        <li className="nav-items">
            <a href="#" className="icon-button" onClick={() => setOpen(!open)}>
                <img src={props.icon} className="nav-icon" />
            </a>
            {open && props.children}
        </li>

    )
}

export default NavButton