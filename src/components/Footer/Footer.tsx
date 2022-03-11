import React from 'react';
import './Footer.css';
import Footerlogo from '../../assets/FooterImages/FooterIcon.png'

const Footer = (props: any) => {
    return (
        <footer className="footer">
            <ul className="footer-content">
                <span className="footer-content--left">
                    <img src={Footerlogo} />
                </span>
                <span className="footer-content--right">
                    <div className="footer-links">
                        <a href="#" className="footer-link">Write</a>
                        <a href="#" className="footer-link">Help</a>
                        <a href="#" className="footer-link">About</a>
                        <a href="#" className="footer-link">Privacy Policy</a>
                    </div>
                </span>
            </ul>
        </footer >
    )
}

export default Footer
