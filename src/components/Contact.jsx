import React,{useEffect} from 'react'
import './Contact.css'
import msg_icon from '../assets/msg-icon.png'
import mail_icon from '../assets/mail-icon.png'
import phone_icon from '../assets/phone-icon.png'
import location_icon from '../assets/location-icon.png'
import fb_icon from '../assets/Facebook icon.png'

const Contact = () => {
    useEffect(() => {
      const apiKey = `{process.env.REACT_APP_GOOGLE_MAPS_API}`;
    
        // Load Google Maps API script dynamically
        const script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initMap`;
        script.defer = true;
        script.async = true;
        window.initMap = initMap;
        document.body.appendChild(script);
    
        // Initialize Google Map
        function initMap() {
          const location = { lat: 42.899587, lng: -78.965343 };
          const map = new window.google.maps.Map(document.getElementById('map'), {
            center: location,
            zoom: 13,
          });
          new window.google.maps.Marker({
            position: location,
            map: map,
            title: 'Our Location',
          });
        }
      }, []);
      console.log(process.env.REACT_APP_GOOGLE_MAPS_API_KEY)
  return (
    <div className='contact'>
      <div className="contact-col">
        <h3 className='location'>Location</h3>
        <p style={{lineHeight:'2', marginInline:''}}> <img src={location_icon} alt="" />Address: 869 Daytona Dr, Fort Erie, ON L2A 4Z7</p>
        <div id="map" style={{ width: '100%', height: '300px' }}></div>
      </div>
      
      <div className="contact-col contact-info">
        <h3>Contact Information <img src={msg_icon} alt="" /></h3>
        <p>Feel free to reach out through our email or find our contact information above. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our community.</p>

        <ul>
        <li><img src={mail_icon} alt="" />Email: <a href="mailto:Cpollard0141@gmail.com"> Cpollard0141@gmail.com</a></li>
        <li><img src={phone_icon} alt="" />Phone: <a href="tel:+2893220141">+1 (289) 322-0141</a></li>
        <li><img src={fb_icon} alt="" />Facebook: <a href="https://www.facebook.com/p/Appliance-Answers-100063809521509/">Appliance Answers</a></li>
        
        </ul>

       
      </div>
    </div>

  )
}

export default Contact