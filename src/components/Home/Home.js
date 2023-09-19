import React from 'react'
import './Home.css';
function Home() {
  return (
   <>
  <div className="home">
    
    <div className="home_main">
    <div className="main__img">
      </div>
      <div className="main__content">
         <div className="main__content__text  ">
          <h1>Hi, I'm <span>Kelash!</span></h1>
          <h1>Creative player</h1>
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
