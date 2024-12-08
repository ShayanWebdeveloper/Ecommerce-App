import React from 'react'
import logo from '../../Assets/logo.svg'
import './Footer.css'
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
import { FaArrowCircleRight } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaFacebookSquare } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";
const Footer = () => {
    return (
        <div className='Footer'>
            <div className='First_Section'>
                <img src={logo} alt="" />
                <div className='Links_footer_Parent'>
                    <div className='Links_footer'><FaFacebookSquare /></div>
                    <div className='Links_footer'><FaTwitter /></div>
                    <div className='Links_footer'><FaPinterest /></div>
                    <div className='Links_footer'><FaLinkedin /></div>
                </div>
            </div>


            <div className='Second_Section'>
                <div className='Contact_Us'>
                    <h2>Contact Us</h2>
                    <div className='Location'>
                        <IoLocation className='icon_footer' /> <p>2751 S Parker Rd, Aurora, CO 80014, United States</p>
                    </div>
                    <div className='Location'>
                        <IoIosCall className='icon_footer' /> <p>032022111054</p>
                    </div>
                    <div className='Location'>
                        <IoMdMail className='icon_footer' /> <p>Footcap.help@gmail.com</p>
                    </div>
                </div>
                <div className='Contact_Us'>
                    <h2>Opening Time</h2>
                    <div className='Time_item'><h4>Mon - Tue:</h4> <p>8AM - 10PM</p></div>
                    <div className='Time_item'><h4>Wed:</h4> <p>8AM - 7PM</p></div>
                    <div className='Time_item'><h4>Fri:</h4> <p>7AM - 12PM</p></div>
                    <div className='Time_item'><h4>Sat:</h4> <p> 9AM - 8PM</p></div>
                    <div className='Time_item'><h4>Sun:</h4> <p>Closed</p></div>
                </div>
                <div className='Contact_Us'>
                    <h2>Newsletter</h2>
                    <p>Authoritatively morph 24/7 potentialities with error-free partnerships.</p>
                    <div className='Input_Div'>
                        <input type="text" name="" id=""  placeholder='Email Address'/>
                        <button>Subscribe</button>
                    </div>
                </div>
            </div>
            <div className='Third_Section'>
                <p>© 2024 <span>Shayan Zubair</span> All Rights Reserved</p>
            </div>
        </div>
    )
}

export default Footer
