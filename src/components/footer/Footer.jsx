import React from 'react';
import './Footer.css';
import { GoLocation } from 'react-icons/go';
import { AiFillPhone } from 'react-icons/ai';
import { AiOutlineMail } from 'react-icons/ai';

const Footer = () => {
    return (
        <div className='footer-container'>
            <div className='footer-left'>
                <ul>
                    <li>Home |</li>
                    <li>Blog |</li>
                    <li>Pricing |</li>
                    <li>About |</li>
                    <li>Faq |</li>
                    <li>Contact</li>
                </ul>
                <p>Murex Breakfast &copy; 2022</p>
            </div>

            <div className='footer-center'>
                <div className='footer-contact'>
                    <GoLocation className='footer-icon' /> 42 York Avenue, Ferndale, Randburg
                </div>
                <div className='footer-contact'>
                    <AiFillPhone className='footer-icon' /> 0790983054
                </div>
                <div className='footer-contact'>
                    <AiOutlineMail className='footer-icon' /> mnevondo777@gmail.com
                </div>
            </div>

            <div className='footer-right'>
                left
            </div>
        </div>
    )
}

export default Footer;