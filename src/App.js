import React from 'react';
// import {BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import './App.css';
import SideBar from './components/sidebar/sideBar.js';
import Home from './components/Home/Home';
import About from './components/About/About';
function App() {


// person data which used in about page including image and name and job title and description 
const person={
  name:"kelash kumar",
  job:"Front-End Developer ",
  age:"20",

  image:"https://scontent.fcai20-4.fna.fbcdn.net/v/t1.6435-9/186480242_10220345082240597_597494233589390813_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=3N8W1yXxq4UAX9YQp4c&_nc_ht=scontent.fcai20-4.fna&oh=0a3d5b2d3e9c0b7f2f4c4b8c9b4a3b7d&oe=60E3B1B0",
  description:"I am a Front-End Developer, I have a passion for web design and love to create for web and mobile devices. ",
   moreDescription:"I have a strong understanding of the web technologies and languages such as HTML, CSS, JavaScript, React, and Bootstrap. I am also familiar with the Adobe Creative Suite, including Photoshop, Illustrator, and XD. I am a hard worker and a fast learner, I am always looking for new challenges to improve my skills and knowledge. I am looking for a position where I can grow and learn from other experienced team members.",
  social:{
    facebook:"https://www.facebook.com/aya.ahmed.142892/",
    linkedin:"https://www.linkedin.com/in/aya-ahmed-1b1a7a1b4/",
    github:""
  },
  contact:{
    phone:"0100234",
    email:"xzy@gmail,com",
    address:"umerkot, Sindh, Pakistan",
  },
  workAs:{
    work1:"Front-End Developer",
    work2:"Back-End Developer",
    work3:"Full-Stack Developer",
  },
  skillInformation:{
    skill:{
      skillTime:" 5+",
      skillTimeDesc:" years of experience",

    },
    projects:{
      projectCompelte:"5+",
      projectCompelteDesc:"projects completed",

    },
    companies:{
      companyWork:"2+",
      companyWorkDesc:"companies worked"

    },
       

    }
  }
  
  
  const Experience1={     //,experience time ,company name ,job title ,description,image, largeDesc
    experienceTime:"2021-present",
    companyName:"kelash,umerkot",
    jobTitle:"web Developer",
    description:"Voluptatem expedita rem unde inventore laudantium. Ipsum vero a ab deserunt eius.",
    image:"https://images.unsplash.com/photo-1588702547923-7093a6c3ba33?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bGFwdG9wfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60",
    largeDesc:"Nostrum voluptatum minus sint ut magni quasi, eveniet quibusdam eos cupiditate numquam explicabo amet labore vel mollitia, natus non rerum voluptatem harum commodi vel excepturi maxime impedit, sit beatae? Consectetur, esse id. Incidunt quos saepe quidem cum, mollitia autem explicabo, dolore amet, voluptatem consequuntur ipsam dolorum commodi hic. Id porro aperiam ducimus saepe, nesciunt a est aut quos cumque omnis, illum labore quia vel maxime, non ullam repellat vero animi pariatur nobis nam rerum? Ut iusto et ex repellat! Provident distinctio facere esse"
  }    
  
  const Experience2={     //,experience time ,company name ,job title ,description,image, largeDesc
    experienceTime:"2020-2022",
    companyName:"Expensify, Karachi",
    jobTitle:"UI/UX Designer",
    description:"Voluptatem expedita rem unde inventore laudantium. Ipsum vero a ab deserunt eius.",
    image:"https://images.unsplash.com/photo-1588702547923-7093a6c3ba33?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bGFwdG9wfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60",
    largeDesc:"Nostrum voluptatum minus sint ut magni quasi, eveniet quibusdam eos cupiditate numquam explicabo amet labore vel mollitia, natus non rerum voluptatem harum commodi vel excepturi maxime impedit, sit beatae? Consectetur, esse id. Incidunt quos saepe quidem cum, mollitia autem explicabo, dolore amet, voluptatem consequuntur ipsam dolorum commodi hic. Id porro aperiam ducimus saepe, nesciunt a est aut quos cumque omnis, illum labore quia vel maxime, non ullam repellat vero animi pariatur nobis nam rerum? Ut iusto et ex repellat! Provident distinctio facere esse"
  }    
  
  
  const Experience3={     //,experience time ,company name ,job title ,description,image, largeDesc
    experienceTime:"2016-2021",
    companyName:"Google, Karachi ",
    jobTitle:"product Designer",
    description:"Voluptatem expedita rem unde inventore laudantium. Ipsum vero a ab deserunt eius.",
    image:"https://images.unsplash.com/photo-1588702547923-7093a6c3ba33?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bGFwdG9wfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60",
    largeDesc:"Nostrum voluptatum minus sint ut magni quasi, eveniet quibusdam eos cupiditate numquam explicabo amet labore vel mollitia, natus non rerum voluptatem harum commodi vel excepturi maxime impedit, sit beatae? Consectetur, esse id. Incidunt quos saepe quidem cum, mollitia autem explicabo, dolore amet, voluptatem consequuntur ipsam dolorum commodi hic. Id porro aperiam ducimus saepe, nesciunt a est aut quos cumque omnis, illum labore quia vel maxime, non ullam repellat vero animi pariatur nobis nam rerum? Ut iusto et ex repellat! Provident distinctio facere esse"
  }    
  
  const Experience4={     //,experience time ,company name ,job title ,description,image, largeDesc
    experienceTime:"2015-2016",
    companyName:"facebook, Karachi ",
    jobTitle:"visual Designer",
    description:"Voluptatem expedita rem unde inventore laudantium. Ipsum vero a ab deserunt eius.",
    image:"https://images.unsplash.com/photo-1588702547923-7093a6c3ba33?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bGFwdG9wfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60",
    largeDesc:"Nostrum voluptatum minus sint ut magni quasi, eveniet quibusdam eos cupiditate numquam explicabo amet labore vel mollitia, natus non rerum voluptatem harum commodi vel excepturi maxime impedit, sit beatae? Consectetur, esse id. Incidunt quos saepe quidem cum, mollitia autem explicabo, dolore amet, voluptatem consequuntur ipsam dolorum commodi hic. Id porro aperiam ducimus saepe, nesciunt a est aut quos cumque omnis, illum labore quia vel maxime, non ullam repellat vero animi pariatur nobis nam rerum? Ut iusto et ex repellat! Provident distinctio facere esse"
  }    






  return (
  <>
<SideBar/>
 {/* <Home/>  */}
<About 
 person={person}
  Experience1={Experience1}
  Experience2={Experience2}
  Experience3={Experience3}
  Experience4={Experience4}
 
/>
  </>
  );

  }
export default App;
