import React, { useEffect, useRef } from 'react';
import './Hero.css';

const Hero = () => {
    const phoneNumber = "+2893220141"; // Replace this with your desired phone number
    const heroRef = useRef(null);

    useEffect(() => {
        const heroElement = heroRef.current;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    heroElement.classList.add('loaded');
                    observer.disconnect();
                }
            },
            { rootMargin: '0px', threshold: 0.1 }
        );

        if (heroElement) {
            observer.observe(heroElement);
        }

        return () => {
            if (heroElement) {
                observer.unobserve(heroElement);
            }
        };
    }, []);

    const makeCall = () => {
        window.location.href = `tel:${phoneNumber}`;
    };

    return (
        <div className='Hero container' ref={heroRef}>
            <div className="hero-text">
                <h1>Appliance Answers</h1>
                <p>We answer to all your appliance concerns</p>
                <button className="btn" onClick={makeCall}>Call Today</button>
            </div>
        </div>
    );
};

export default Hero;
