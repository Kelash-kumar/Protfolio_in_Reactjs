import React from "react";
import "./sideBar.css";
import "./mobileSideBar.css";
// link
// import { Link } from "react-router-dom";
import { BiLogoFacebook, BiLogoLinkedin, BiLogoTwitter } from "react-icons/bi";
import MobileSideBar from "./MobileSideBar";
import SideBarData from "./MobileSideData";

const SideBar = () => {
  return (
    <>
      <MobileSideBar />
      <div className="kelash_tm_sidebar">
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
                  <a to={item.path}>
                    <span>{item.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/*  */}
          <div className="copyright">
            <div className="social">
              <ul>
                {/*facebook  */}

                {/* <li><a href="/"><i class="icon-facebook-1"></i></a></li> */}
                <li>
                  <a href="/">
                    <i>
                      <BiLogoFacebook className="icon" />
                    </i>
                  </a>
                </li>
                <li>
                  <a href="/">
                    <i>
                      <BiLogoLinkedin className="icon" />
                    </i>
                  </a>
                </li>
                <li>
                  <a href="/">
                    <i>
                      <BiLogoTwitter className="icon" />
                    </i>
                  </a>
                </li>
                {/* <li><a href="/"><i class="icon-twitter-1"></i></a></li> */}
                {/* <li><a href="/"><i class="icon-linkedin-1"></i></a></li> */}
              </ul>
            </div>
            <div className="text">
              <p>Copyright © 2023 kelash. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
