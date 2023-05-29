import "./Footer.css";
import React from "react";

import { FaFacebook, FaHome, FaLinkedinIn, FaMailBulk, FaPhone, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">

            <div className="left">
                <div className="location">
                    <FaHome  size={20} style={{color:"#fff" , marginRight: "2rem"}} />
                    <div>
                        <p>123 housing society.</p>
                        <p>India</p>
                    </div>

                </div>
                <div className="phone">
                <h4><FaPhone  size={20} style={{color:"#fff" , marginRight: "2rem"}} />
                9557454-4511</h4>

                </div>

                <div className="email">
                <h4><FaMailBulk  size={20} style={{color:"#fff" , marginRight: "2rem"}} />
                9557454-4511</h4>

                </div>
            </div>
            <div className="right">
                <h4>About the company</h4>
                <p>
                    This is me Tushant Shastri.CEO and Founder of D-Maroon. I enjoy making new projects and Designs.
                </p>

                <div className="social">
                    <FaFacebook size={30} style={{color:"#fff" , marginRight:"1rem"}} />
                    <FaTwitter size={30} style={{color:"#fff" , marginRight:"1rem"}} />
                    <FaLinkedinIn size={30} style={{color:"#fff" , marginRight:"1rem"}} />


                </div>
            </div>

        </div>

    </div>
  )
}

export default Footer