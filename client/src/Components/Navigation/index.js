import React from 'react';
import { NavLink } from 'react-router-dom';



const Navigation = () => {
    return (
        <div className="header header-bg">
            <NavLink to="/">
                <h1>PLANNER: Thrifty Travel</h1>
            </NavLink>
            <ul className="nav-menu">
                <li>
                    <NavLink to="/" className="active-link">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/activities" className="active-link">Activities</NavLink>
                </li>
                <li>
                    <NavLink to="/calendar" className="active-link">Calendar</NavLink>
                </li>
                <li>
                    <NavLink to="/contact" className="active-link">Contact</NavLink>
                </li>
            </ul>
        </div>
    )
}


export default Navigation;