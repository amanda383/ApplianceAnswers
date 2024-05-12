import React, { useState } from 'react';
import './Services.css';
import logo1 from '../assets/image1.png'; // Import the first image
import logo2 from '../assets/image2.jpeg'; // Import the second image
import logo3 from '../assets/image3.jpeg'; // Import the second image
import logo4 from '../assets/image4.jpeg'; // Import the second image
import logo5 from '../assets/image5.png'; // Import the second image
import logo6 from '../assets/image6.jpeg'; // Import the second image
import logo7 from '../assets/image7.jpeg'; // Import the second image
import logo8 from '../assets/image8.png'; // Import the second image
import logo9 from '../assets/image9.png'; // Import the second image
import logo10 from '../assets/image10.png'; // Import the second image
import logo11 from '../assets/image11.png'; // Import the second image
import logo12 from '../assets/image12.png'; // Import the second image
import logo13 from '../assets/image13.png'; // Import the second image


const Services = () => {
  const [slideIndex, setSlideIndex] = useState(0); // Initialize slide index to 0

  const images = [logo1, logo2,logo3,logo4,logo5,logo6,logo7,logo8,logo9,logo10,logo11,logo12,logo13]; // Add other image paths as needed

  const plusSlides = (n) => {
    setSlideIndex((prevIndex) => {
      let newIndex = prevIndex + n;
      // Ensure the index wraps around when reaching the beginning or end of the slides
      if (newIndex < 0) {
        newIndex = images.length - 1;
      } else if (newIndex >= images.length) {
        newIndex = 0;
      }
      return newIndex;
    });
  };

  const currentSlide = (n) => {
    setSlideIndex(n);
  };

  return (
    <div className='about'>
      <div className="about-left">
        <h1>Who are we?</h1>
        <p>Welcome to our locally owned and operated business, proudly serving the Niagara community since 2016. With over 20 years of experience specifically in Niagara, I bring a deep understanding of the needs and preferences of our fellow residents, having been an integral part of this community for nearly five decades.
</p>

        <h1>What do we offer?</h1>
<p>At our company, we specialize in installations, repairs, rebuilding, and servicing of all appliance makes and models. Whether it's your refrigerator, stove, washer, dryer, or any other household appliance, I'm equipped to handle it with expertise and efficiency. From minor fixes to major overhauls, I'm committed to restoring the functionality of your appliances to their optimal condition.</p>
      <p>In addition to our comprehensive repair services, we also offer a selection of new and used appliances for sale. Whether you're looking to upgrade your current appliances or replace a malfunctioning unit, my inventory features quality products that meet a range of needs and budgets.</p>
      <p>With my dedication to exceptional service, unparalleled expertise, and commitment to customer satisfaction, I'm here to provide you with reliable solutions for all your appliance needs. Whether you're facing an urgent repair situation or simply looking to upgrade your home appliances, trust me to deliver results that exceed your expectations.</p>
      <p style={{fontWeight: 'bold', fontSize:'20px'}}>Certified 
      <ul>
          <li>Appliance Technician</li>
          <li>General Contractor</li>
          <li>HVAC Technician</li>
          <li>Rv2 Technician</li>
        </ul>
        </p>
     
      
      </div>
      <div className="about-right">
        <div className="slideshow-container">
          {images.map((image, index) => (
            <div
              key={index}
              className={index === slideIndex ? "mySlides fade show" : "mySlides fade"} // Add the 'show' class conditionally
            >
              <div className="numbertext">{index + 1} / {images.length}</div>
              <img src={image} style={{ width: '100%' }} alt={`Slide ${index + 1}`} />
              {/* <div className="text">Caption Text</div> */}
            </div>
          ))}
          <a className="prev" onClick={() => plusSlides(-1)}>&#10094;</a>
          <a className="next" onClick={() => plusSlides(1)}>&#10095;</a>
        </div>
        <div style={{ textAlign: 'center' }}>
          {images.map((_, index) => (
            <span
              key={index}
              className={index === slideIndex ? "dot active" : "dot"}
              onClick={() => currentSlide(index)}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
