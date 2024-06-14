import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Testimonials from './components/Testimonials'
import Titles from './components/Titles'
import Contact from './components/Contact'
import Footer from './components/Footer'



const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className='container'>
        <Titles title='About Us'/>
        <Services />
        <Titles title='Testimonals'/>
        <Testimonials/>
        <Titles title='Contact Us'/>
        <Contact/>
        <Footer/>
        
      </div>
   
    </div>
  )
}

export default App