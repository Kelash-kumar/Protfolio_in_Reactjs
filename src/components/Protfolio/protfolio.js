import React from "react";
import "./Protfolio.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
const protfolio = () => {
  return (
    <div className="protfolio">
      <div className="protfolio__main">
        <div className="protfolio__main__top">
            <div className="protfolio__main__top__left">
            <h3>- Projects </h3>
            <h1>Recents Completed work! </h1>
            </div>
            <div className="protfolio__main__top__right">
                 <IoIosArrowBack className="top__icon"/>
                 <IoIosArrowForward className="top__icon"/>
            </div>
        </div>
        {/* now make card to place project image and name like a crousel */}
        <div className="protfolio__bottom">
        <div className="protfolio__main__bottom">
            <div className="protfolio__main__bottom__card">
                <img src="https://images.unsplash.com/photo-1612830389962-4b2a4f6b4e8a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29tcHV0ZXIlMjB3b3JrfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"/>
                <h3>Project Name</h3>
            </div>
            </div>
            </div>
            <div className="k"></div>
      </div>
    </div>
  );
};

export default protfolio;
