import React from 'react';
import './FooterStyle.css'
import {FaInstagram, FaEnvelopeOpenText, FaPhoneAlt} from "react-icons/fa"

const footer = () => {
    return (
        <div className="footer">
            <div className="footer-container">
                      <div className="social">
                        <a href="https://www.instagram.com/_thriftytravel_/">
                        <FaInstagram size={30} style={{color:"#596E79", marginRight: "1rem"}} /></a>

                        <a href = "mailto: thriftytravel@gmail.com">
                        <FaEnvelopeOpenText size={30} style={{color:"#596E79", marginRight: "1rem"}} /></a>

                        <a href="tel:1234567891">
                        <FaPhoneAlt size={30} style={{color:"#596E79", marginRight: "1rem"}} /></a>
                    </div>
                <div>
                    <span class="block text-sm text-gray-500  dark:text-gray-400">© 2023 Thrifty Travel™. All Rights Reserved.
                    </span>
                </div>

            </div>
        </div>
    )
}

export default footer;