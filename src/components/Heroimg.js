import "./Heroimg.css";

import React from 'react'
import IntroImg from "../assets/main.jpg";
import { Link } from "react-router-dom";
const Heroimg = () => {
  return (
    <div class="hero">
      <div class="mask">
        <img className="into-img" src={IntroImg} alt="IntroImg" />
      </div>
      <div className="content" > 
      <p>HI, I'M TUSHANT</p>
      <h1>Web Developer</h1>
      <div>
        <Link to="/Project" className="btn" >Projects</Link>
        <Link to="/Contact" className="btn btn-light" >Contact</Link>
      </div>
      
      </div>
    </div>
  );
}

export default Heroimg;