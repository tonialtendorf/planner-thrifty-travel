import './ContactStyle.css'
import React from 'react'

const ContactForm = () => {
    return (
    <div className="form">
        <form>
            <label>Name</label>
            <input type="text"></input>
            <label>Email</label>
            <input type="text"></input>
            <label>Activities</label>
            <textarea rows="4" placeholder="Enter the activities you are interested in"></textarea>
            <label>Message</label>
            <textarea rows="6" placeholder="Type your message here"></textarea>
            <button className="btn">Submit</button>
        </form>
    </div>
)
}

export default ContactForm;