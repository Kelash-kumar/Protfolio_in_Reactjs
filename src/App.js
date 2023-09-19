import React from 'react';
// import {BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import './App.css';
import SideBar from './components/sidebar/sideBar.js';
import Home from './components/Home/Home';
function App() {
  return (
  <>
<SideBar/>
<Home/>
  </>
  );
}

export default App;
