import React, { useState } from "react";
import "./mobileSideBar.css"; // import CSS file
import SideBarData from "./MobileSideData";
import { AiOutlineMenu } from "react-icons/ai"; // import react icons
import { RiCloseLine } from "react-icons/ri"; // import react icons

function MobileSideBar() {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <div className="navbar">
        <h1 className="logo">kelash kumar</h1>
        <div className="menu-bar-toggle">
          <AiOutlineMenu onClick={() => setToggle(!toggle)} />
        </div>
      </div>

      {toggle && ( // Only render the side-menu if toggle is true
        <div className="side-menu active">
          <ul className="nav-menu">
            <li className="menu-item-cross">
              <RiCloseLine onClick={() => setToggle(!toggle)} />
            </li>
            {SideBarData.map((item, index) => (
              <li key={index} className={item.className}>
                <a href={item.path}>
                  {item.icon}
                  <span>{item.title}</span>
                </a>
              </li>
            ))}
             
              <p className="text">Copyright © 2023 kelash. All rights reserved.</p>
          
          </ul>
          
        </div>
      )}
    </>
  );
}

export default MobileSideBar;
