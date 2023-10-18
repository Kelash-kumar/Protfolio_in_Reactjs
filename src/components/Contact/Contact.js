

import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <div className='contact'>
    <div className='contact__main'>
    <div className='contact__main_top'>
    <div className='contact__main__text'>
      <h3>- Lets Connect</h3>
      <h1>Get in touch</h1>
      <p>Lorem ipsum dolor 
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, magni.
        sit amet, consectetur adipisicing elit. Nostrum, eum.</p>
      <ul className='text_ul'>
        <li>0343245435</li>
        <li>email</li>
        <li>sindh pakistan</li>
      </ul>
    </div>
    <div className='contact__main__form'>
      <form>
        <input type='text' placeholder='Name'/>
        <input type='text' placeholder='Email'/>
        <textarea placeholder='Message'></textarea>
        <button>Send Message</button>
      </form>
    </div>
    </div>
    {/* give map  */}
   <div className="contact__main_bottom">
    <div className='contact__main__map'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.752246399827!2d67.7179983149921!3d25.36138898382251!2m3!1f0!2f0!3f0!3m2!1i1024!2i768
        !4f13.1!3m3!1m2!1s0x392a2f8c0e2f4c9d%3A0x2e9c1c5c1e8f1f4a!2sUmerkot%2C%20Sindh!5e0!3m2!1sen!2s!4v1624620825652!5m2!1sen!2s" 
        width="900" height="500" style={{border:0}} allowfullscreen="" loading="lazy"></iframe>
          </div>
   </div>
    </div>
    </div>
  )
}

export default Contact
