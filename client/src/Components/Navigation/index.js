import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavigationStyle.css'


const Navigation = () => {
    return (
        <div className="header header-bg">
            <NavLink to="/">
                <h1>Planner</h1>
                <p>brought to you by Thrifty Travel</p> 
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