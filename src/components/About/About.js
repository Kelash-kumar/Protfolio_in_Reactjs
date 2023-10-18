import React from "react";
import "./About.css";
import { useState } from "react";
import SkillComponent from '../SubComponent/SkillComponent/SkillComponent';
import Experience from '../SubComponent/ExCardComponent/ExperienceComponent.js';
// import { ImCross } from "react-icons/im";
// import { FaArrowRight } from "react-icons/fa";
function About(props) {
  const [isContainerVisible, setContainerVisible] = useState(false);
  return (
    <div className="kelash_tm_about">
      <div className="about_tm_main">
        <div className="kelash_tm_biography">
          {/* left side css */}
          <div className="left">
            <div className="title">
              <span className="mini">- Nice to meet you!</span>
              <h3 className="name"> {props.person.name} </h3>
              <span className="job">
                <span className="cd-headline rotate-1">
                  <span className="blc">{props.person.job} &amp; Creative</span>
                </span>
              </span>
            </div>
            <div className="kelash_tm_button transition_link">
              <a href="#portfolio">Got a project?</a>
            </div>
          </div>
          {/* right side about */}
          <div className="right">
            <div className="text">
              <p>
                Hello there! My name is
                <span className="yellowColor"> kelash</span>. I am a web
                developer &amp; developer, and I'm very passionate and dedicated
                to my work.
              </p>
              <p>{props.person.moreDescription}</p>

              <div className="info">
                <ul>
                  <li>
                    <span>Age</span>
                    <span>{props.person.age}</span>
                  </li>
                  <li>
                    <span>Born In</span>
                    <span>
                      <a className="href_location" href="#">
                        {props.person.contact.address}
                      </a>
                    </span>
                  </li>
                  <li>
                    <span>Mail</span>
                    <span>
                      <a href="https://marketifythemes.net/cdn-cgi/l/email-protection#a4d7d1d4d4cbd6d0e4c1c8cdd7c78ac7cbc9">
                        <span
                          className="__cf_email__"
                          data-cfemail="5a292f2a2a35282e1a3f3633293974393537"
                        >
                          [{props.person.contact.email}&#160;protected]
                        </span>
                      </a>
                    </span>
                  </li>
                  <li>
                    <span>Phone</span>
                    <span>
                      <a href="tel:+92 3491100042">
                        {props.person.contact.phone}
                      </a>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="skill__time">
          <SkillComponent
            value={props.person.skillInformation.skill.skillTime}
            valueDesc={props.person.skillInformation.skill.skillTimeDesc}
            bgColor="#c3faf3"
          />
          <SkillComponent
            value={props.person.skillInformation.projects.projectCompelte}
            valueDesc={
              props.person.skillInformation.projects.projectCompelteDesc
            }
            bgColor="#f9d4fc"
          />
          <SkillComponent
            value={props.person.skillInformation.companies.companyWork}
            valueDesc={props.person.skillInformation.companies.companyWorkDesc}
            bgColor="#d4fcdb"
          />
        </div>

        <div className="kelash__experience">
          <div className="kelash__experience__container">
            <div className="kelash_info_experience">
              <h3 >Experience</h3>
              <h1>Every Thing About Me !</h1>
            </div>
            <div className="kelash__experience__container__card">
              <Experience
                experienceTime={props.Experience1.experienceTime}
                companyName={props.Experience1.companyName}
                jobTitle={props.Experience1.jobTitle}
                description={props.Experience1.description}
                image={props.Experience1.image}
                largeDesc={props.Experience1.largeDesc}
              />
              <Experience
                experienceTime={props.Experience2.experienceTime}
                companyName={props.Experience2.companyName}
                jobTitle={props.Experience2.jobTitle}
                description={props.Experience2.description}
                image={props.Experience2.image}
                largeDesc={props.Experience2.largeDesc}
              />
              <Experience
                experienceTime={props.Experience3.experienceTime}
                companyName={props.Experience3.companyName}
                jobTitle={props.Experience3.jobTitle}
                description={props.Experience3.description}
                image={props.Experience3.image}
                largeDesc={props.Experience3.largeDesc}
              />
              <Experience
                experienceTime={props.Experience4.experienceTime}
                companyName={props.Experience4.companyName}
                jobTitle={props.Experience4.jobTitle}
                description={props.Experience4.description}
                image={props.Experience4.image}
                largeDesc={props.Experience4.largeDesc}
              />
            </div>
          </div>
        </div>
        {/* exp-end */}
      </div>
    </div>
  );
}

export default About;
