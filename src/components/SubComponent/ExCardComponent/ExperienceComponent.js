import React, { useState } from "react";
import "./Experience.css"; // Import your CSS file

import { ImCross } from "react-icons/im";
const Experience = (props) => {
  const [isContainerVisible, setContainerVisible] = useState(false);

  console.log(isContainerVisible);

  return (
    <>
      <div className="kelash__experience__card"
     
      >
        <div
          className="card__container shadow-2xl"
          onClick={() => {
            setContainerVisible(true);
          }}
        >
          <span className="card__container__span1">
            {props.experienceTime}
          </span>
          <span className="card__container__span2">
            {props.companyName}
          </span>
          <h1 className="card__container__h1">
            {props.jobTitle}
          </h1>
          <p className="card__container__p">
            {props.description}
          </p>
          <p
          style={{
            textDecoration:'underLine',
            fontWeight:'300',
            cursor:'pointer'
          }}
          >{props.readMore}  </p>
        </div>
      </div>

      {isContainerVisible && (
        <div className="container">
          <div className="centered">
            <div
              className="centered_cross_icon"
              onClick={() => {
                setContainerVisible(false);
              }}
            >
              <ImCross className="cross_icon" />
            </div>
            <div className="centered_image">
              <img
                className="image__img"
                src="https://images.unsplash.com/photo-1588702547923-7093a6c3ba33?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bGFwdG9wfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60"
                alt="image"
              />
            </div>
            <div className="text">
              <span className="text__span">
                {props.experienceTime}
              </span>
              <h3 className="text__h3">
                {props.jobTitle}
              </h3>
              <h1 className="text__h1">
              {props.companyName}
              </h1>
              <p className="text__p">
              {props.largeDesc}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Experience;
