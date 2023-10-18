import React, { useState } from "react";
import "./mobileSideBar.css";
import SideBarData from "./MobileSideData";
import { AiOutlineMenu } from "react-icons/ai";
import { RiCloseLine } from "react-icons/ri";
import { motion, AnimatePresence } from "framer-motion"; // Import Framer Motion
import { Link } from "react-router-dom";

function MobileSideBar() {
  const [toggle, setToggle] = useState(false);

  const variants = {
    open: { opacity: 1, x: 0,
      transition: {
        ease: "easeInOut", // You can adjust the easing function
        duration: 0.1, // You can adjust the duration of the animation
      },
    },
    closed: { opacity: 1, x: "100%" ,
    transition: {
      ease: "easeIn", // You can adjust the easing function
      duration: 0.3, // You can adjust the duration of the animation
    },
  },
    
  };

  return (
    <>
      <div className="navbar">
        <h1 className="logo">kelash kumar</h1>
        <div className="menu-bar-toggle">
          <AiOutlineMenu onClick={() => setToggle(!toggle)} />
        </div>
      </div>

      <AnimatePresence>
        {toggle && (
          <motion.div
            className="side-menu active"
            initial="closed"
            animate="open"
            exit="closed"
            variants={variants}
          >
            <ul className="nav-menu">
              <li className="menu-item-cross">
                <RiCloseLine onClick={() => setToggle(!toggle)} />
              </li>
              {SideBarData.map((item, index) => (
                <li key={index} className={item.className}>
                  <a href={item.path}>
                    {/* <Link to={item.path}> */}
                    {item.icon}
                    <span>{item.title}</span>
                    {/* </Link> */}
                  </a>
                </li>
              ))}
              <p className="text">Copyright © 2023 kelash. All rights reserved.</p>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default MobileSideBar;
