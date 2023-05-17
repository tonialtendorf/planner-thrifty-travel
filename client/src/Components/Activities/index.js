import React from 'react';
import './ActivitiesStyle.css'
import { NavLink } from 'react-router-dom'
import snorkelingImage from '../assets/snorkeling.jpg'
import hikingImage from '../assets/hiking.jpeg'
import kayakingImage from '../assets/kayaking.jpg'
import shoppingImage from '../assets/shopping.jpg'

const Activities = () => {
    return <div className="work-container">
        <h1 className="activity-heading">Snorkeling</h1>
        <div className="activity-container">
            <div className="activity-card">
                <img src={snorkelingImage} alt="img1" />
                <h2 className="activity-title">Snorkeling</h2>
                <div className="btn-git">
                    <NavLink to ="https://tonialtendorf.github.io/Thrifty-Travel/" className="btn">View</NavLink>
                    <NavLink to ="https://github.com/tonialtendorf/Thrifty-Travel" className="btn">GitHub</NavLink>
                </div>
            </div>
            <div className="activity-card">
                <img src={shoppingImage} alt="img1" />
                <h2 className="activity-title">Shopping</h2>
                <div className="btn-git">
                    <NavLink to ="https://shopping-list.herokuapp.com/" className="btn">View</NavLink>
                    <NavLink to ="https://github.com/tferraro517/Shopping_List_Project" className="btn">GitHub</NavLink>
                </div>
            </div>
            <div className="activity-card">
                <img src={kayakingImage} alt="img3" />
                <h2 className="activity-title">Kayaking</h2>
                <div className="btn-git">
                    <NavLink to ="https://tonialtendorf.github.io/Challenge-6-WeatherApp/" className="btn">View</NavLink>
                    <NavLink to ="https://github.com/tonialtendorf/Challenge-6-WeatherApp" className="btn">GitHub</NavLink>
                </div>
            </div>
            <div className="activity-card">
                <img src={hikingImage} alt="img4" />
                <h2 className="activity-title">Hiking</h2>
                <div className="btn-git">
                    <NavLink to ="https://tonialtendorf.github.io/Module-3-Password-Generator/" className="btn">View</NavLink>
                    <NavLink to ="https://github.com/tonialtendorf/Module-3-Password-Generator" className="btn">GitHub</NavLink>
                </div>
            </div>
        </div>
    </div>
}

export default Activities;
