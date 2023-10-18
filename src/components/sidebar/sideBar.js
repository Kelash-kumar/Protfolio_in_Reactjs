import React from "react";
import { Link } from "react-router-dom";
import "./sideBar.css";
import "./mobileSideBar.css";
import MobileSideBar from "./MobileSideBar";
import SideBarData from "./MobileSideData";
import { BiLogoFacebook, BiLogoGithub, BiLogoLinkedin } from "react-icons/bi";
import { motion } from "framer-motion";

const SideBar = () => {
  return (
    <>
      <MobileSideBar />
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="kelash_tm_sidebar"
      >
        <div className="sidebar_inner">
          {/* Sidebar content here */}
          <div className="author">
            <div className="image">
              <img src="./assets/img/thumbs/kel.jpg" alt="kelash" />
              <div className="main">
                {/* data-img-url="./assets/img/about/11.png"> */}
                {/* <img src="https://images.unsplash.com/photo-1503443207922-dff7d543fd0e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWVufGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60" alt="" /> */}
              </div>
            </div>
            <div className="name">
              <h3>
                <span>
                  kelash<span className="back"> kelash</span>
                </span>
              </h3>
            </div>
          </div>

          <div className="menu scrollable">
            <ul className="transition_link">
           
              {SideBarData.map((item, index) => (
                <li key={index} className={item.className}>
                  <a href={item.path} >
                    <span className="link_text">{item.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/*  */}
          <div className="copyright">
            <div className="social">
              <ul>
                <li>
                  <a href="https://www.facebook.com/kelashkumar.raisal/">
                    <i>
                      <BiLogoFacebook className="icon" />
                    </i>
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/kelash-kumar-47245a255/">
                    <i>
                      <BiLogoLinkedin className="icon" />
                    </i>
                  </a>
                </li>
                <li>
                  <a href="https://github.com/Kelash-kumar">
                    <i>
                      <BiLogoGithub className="icon" />
                    </i>
                  </a>
                </li>
 
              </ul>
            </div>
            <div className="text">
              <p>Copyright © 2023 kelash. All rights reserved.</p>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default SideBar;
