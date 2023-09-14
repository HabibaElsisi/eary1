import React, { Component } from 'react';
import './contactus.css';
class Contactus extends Component {
    state = {  } 
    render() { 
        return (
            <div className="box contactUs-box">
                <div className="container contactUs-container">
                    <h1>Contact Us</h1>
                    <form>
                        <div className="feedback-container">
                            <h2>Your Feedback</h2> 
                            <input type="number"min="0"max='5'placeholder="your rate..."class="input-rate"/>
                            <textarea type="text"placeholder="Your Feedback..."class="input-feedback"/>
                            <button className='btn feedback-submit-btn'>Submit</button>
                        </div>
                    </form>
                    <div className="contactUs-socialMedia">
                        <p>If You Want To Contact Us Visit Our Social Media!</p>
                        <div className="icons">
                            <i className="fa-brands fa-facebook-f"></i>
                            <i className="fa-brands fa-instagram"></i>
                            <i className="fa-brands fa-linkedin"></i>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Contactus;