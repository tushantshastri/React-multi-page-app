import React from "react";
import "./WorkCardStyle.css";
import pro1 from "../assets/project1.png"
import { NavLink } from "react-router-dom";


const WorkCard = () => {
    return <div className="work-container">
        <h1 className="project-heading">Projects</h1>
        <div className="project-container">
            <div className="project-card">
                <img src={pro1} alt="" />
                <h2 className="project-title">
                    Weather Application
                </h2>
                <div className="pro-details">
                    <p>This is a Weather Detacting App which detact Temparature, humidity and many more through API</p>
                    <div className="pro-btns"></div>
                    <NavLink to="" src="" className="btn1">View</NavLink>

                    <NavLink to="url.com" className="btn2">Source</NavLink>
                </div>

            </div>

        </div>

    </div>
};
export default WorkCard;
