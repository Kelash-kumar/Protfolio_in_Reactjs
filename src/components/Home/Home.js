import React from 'react'
import './Home.css';
import { motion } from "framer-motion";
function Home() {
  return (
   <>
  <div className="home">
    
    <div className="home_main">
    <motion.div 
      initial={{ scale:1.1, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 0.1, duration: 0.3 }}
    className="main__img  drop-shadow-2xl  ">
      </motion.div>
      <div className="main__content">
         <div className="main__content__text  ">
          <h1>Hi, I'm <span>Kelash</span></h1>
          <section class="animation">
    <div className="first"><div>Creative</div></div>
    <div className="second"><div>Web Developer</div></div>
    <div className="third"><div>Systems Engineer</div></div>
  </section>
          <h1>Based in umerkot</h1>
          <p className='main__content__text_p'>I'm a Umerkot based web developer & front‑end developer with <span>2+ year</span> of experience</p>
         </div>

         <div className="main__content__button">
          <button type="button">Got a project</button>
          <button type="button">Let's Talk</button>
         </div>

         <div className="main__content__contact">
          <p>+92 3443496699</p>
          <p>kelash.raisal@gmail.com</p>
          <p>Umerkot,Sindh Pakistan</p>
         </div>
   
      </div>
      
    </div>
  </div>
   </>
  )
}

export default Home
