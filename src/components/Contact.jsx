import React  from 'react'
import './Contact.css'
import msg_icon from '../assets/msg-icon.png'
import mail_icon from '../assets/mail-icon.png'
import phone_icon from '../assets/phone-icon.png'
import location_icon from '../assets/location-icon.png'
import fb_icon from '../assets/Facebook icon.png'

const Contact = () => {
   
  return (
    <div className='contact'>
     
      <div className="contact-col contact-info">
        <h3>Contact Information <img src={msg_icon} alt="" /></h3>
        <p>Feel free to reach out through our email or find our contact information above. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our community.</p>
        <ul>
          
        <li><img src={mail_icon} alt="" />Email: <a href="mailto:Cpollard0141@gmail.com"> Cpollard0141@gmail.com</a></li>
        <li><img src={phone_icon} alt="" />Phone: <a href="tel:+2893220141">+1 (289) 322-0141</a></li>
        <li><img src={fb_icon} alt="" />Facebook: <a href="https://www.facebook.com/p/Appliance-Answers-100063809521509/">Appliance Answers</a></li>
        <li><img src={location_icon} alt="" />Address: 869 Daytona Dr, Fort Erie, ON L2A 4Z7</li>
        </ul>

       
      </div>
    </div>

  )
}

export default Contact