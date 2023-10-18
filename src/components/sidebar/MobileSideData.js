import React from "react";
// icons 
import { AiOutlineHome } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { AiTwotoneCustomerService } from "react-icons/ai";
import { BiSolidContact } from "react-icons/bi";
import { BsFile } from "react-icons/bs";
const SideBarData = [
    {
        title: "Home",
        path: "/",
        icon: <AiOutlineHome className="icon" />,
        className: "nav-text",
    },
    {
        title: "About",
        path: "/about",
        icon: <BsFillPersonFill className="icon" />,
        className: "nav-text",
    },
    {
        title: "Services",
        path: "/services",
        icon: <AiTwotoneCustomerService className="icon" />,
        className: "nav-text",
    },
    {
        title: "Portfolio",
        path: "/portfolio",
        icon: <BsFile className="icon" />,
        className: "nav-text",
    },
   
    {
        title: "Contact",
        path: "/contact",
        icon: <BiSolidContact className="icon" />,
        className: "nav-text",
    },
    ];

export default SideBarData;