import React from 'react';
import './Hero.css';

const Hero = () => {
    const phoneNumber = "+2893220141"; // Replace this with your desired phone number

    const makeCall = () => {
        window.location.href = `tel:${phoneNumber}`;
    };

    return (
        <div className='Hero container'>
            <div className="hero-text">
                <h1>Appliance Answers</h1>
                <p>We answer to all your appliance concerns</p>
                <button className="btn" onClick={makeCall}>Call Today</button>
            </div>
        </div>
    );
};

export default Hero;