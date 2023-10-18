
import React from 'react'
import './Services.css';
import '../About/About.css';
import ServiceCard from '../SubComponent/ExCardComponent/ExperienceComponent';

const  Services = (props) => {
  return (
   <>
   
        <div className="services">
          <div className="services__main">

        <div className="kelash__experience"
        style={{background:'#fff'}}
        >
          <div className="kelash__experience__container">
            <div className="kelash_info_experience">
              <h3>- Services</h3>
              <h1> My Services</h1>
            </div>
            <div className="kelash__experience__container__card">
               <ServiceCard 
                //  experienceTime=
                //  companyName={props.Experience1.companyName}
                 jobTitle={props.Experience1.jobTitle}
                 description={props.Experience1.description}
                 image={props.Experience1.image}
                 largeDesc={props.Experience1.largeDesc}
                 readMore={props.Experience1.readMore}
                 readMoreIcon={props.Experience1.readMoreIcon}
                 />
               <ServiceCard 
                //  experienceTime=
                //  companyName={props.Experience1.companyName}
                 jobTitle={props.Experience1.jobTitle}
                 description={props.Experience1.description}
                 image={props.Experience1.image}
                 largeDesc={props.Experience1.largeDesc}
                 readMore={props.Experience1.readMore}
                 readMoreIcon={props.Experience1.readMoreIcon}
                 />

            </div>
          </div>
        </div>
        {/* exp-end */}
        <div className="services__video">
        <iframe
        width="1010"
        height="500"
        src="https://www.youtube.com/watch?v=mnN1Z_-PjJk"
        title="YouTube Video"
        frameBorder="0"
        allowFullScreen
      ></iframe>
        </div>
                 </div>
               </div>

   </>
  )
}

export default Services
