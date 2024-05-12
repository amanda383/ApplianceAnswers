import React, { useRef } from 'react'
import './Testimonals.css'
import next_icon from '../assets/next-icon.png'
import back_icon from '../assets/back-icon.png'


const Testimonials = () => {

    const slider = useRef();
    let tx = 0;

    const slideFoward = ()=>{
        if(tx > -50){
            tx -=25;
        }
        slider.current.style.transform = `translateX(${tx}%)`
    }

    const slideBackward = ()=>{
        if(tx < 0){
            tx +=25;
        }
        slider.current.style.transform = `translateX(${tx}%)`
    
    }
  return (
    <div className='testimonals'>
        <img src={next_icon} alt="" className='next-btn' onClick={slideFoward} />
        <img src={back_icon} alt="" className='back-btn'onClick={slideBackward}/>
        
            <div className='slider'>
            <ul ref={slider}>
                <li>
                <div className='slide'>
                <div className="user-info">
                    <div>
                        <h3>Ketu Kingston</h3>
                        <span>Fort Erie, ON</span>
                    </div>
                    <p>Chris was on time, asked questions before he tore my appliance apart. Carefully examined not only the engine but the simple mechanics of whether the washer was level and noticed missing screws. I liked that he was communicative and inquistive! When I questioned issues with another appliance, before he even looked at it, defined the issue. From now on, not only will I refer Chris to others but he is the only serviceman for our appliance!</p>
                </div>
                </div>
              </li>
              <li>
                <div className='slide'>
                <div className="user-info">
                    <div>
                        <h3>Elise Comrie Ristau</h3>
                        <span>Fort Erie, ON</span>
                    </div>
                    <p>Fast, dependable and well priced! Have used their service many times and recommended to everyone I know. Tells you whether it is worth fixing, offers used replacement options, and knows all about electrical and plumbing to faciliate small renovations. I love my new kitchen! Thanks Appliance Answers!</p>
                </div>
                </div>
              </li>
              <li>
                <div className='slide'>
                <div className="user-info">
                    <div>
                        <h3>Steve Bourgeois</h3>
                        <span>Fort Erie, ON</span>
                    </div>
                    <p>Best professional and reasonable service in Fort Erie. Highly recommend</p>
                </div>
                </div>
              </li>
              <li>
                <div className='slide'>
                <div className="user-info">
                    <div>
                        <h3>Marquel Augustine</h3>
                        <span>Fort Erie, ON</span>
                    </div>
                    <p>He is an absolute life saver! I recently moved and installed a washer dryer that was new but had been sitting a while. The washer stopped draining properly and he made time to look at it quickly and fixed it within an hour. Low and behold a few days later the dryer started having issues and he was to the rescue the very next day. Both times he arrived on time and his prices are SO reasonable. He's going to be my go to from now on. </p>
                </div>
                </div>
              </li>
              <li>
                <div className='slide'>
                <div className="user-info">
                    <div>
                        <h3>Sara Jean</h3>
                        <span>Fort Erie, ON</span>
                    </div>
                    <p>Chris is knowledgable and extremely experienced! Prompt, efficient and honest service! I highly recommend Appliance Answers.</p>
                </div>
                </div>
              </li>
            </ul>
        </div>
    </div>
  )
}

export default Testimonials