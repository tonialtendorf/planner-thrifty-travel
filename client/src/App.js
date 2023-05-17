import './App.css';
import Contact from './Components/Contact'
import Activities from './Components/Activities';
import Home from './Components/Home'
import Calendar from './Components/Calendar'
import Footer from './Components/Footer'
import React from 'react';
import { Route, Routes } from "react-router-dom"
import './index.css';


function App() {
  return (
  <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/activities" element={<Activities />} />
      <Route path="/calendar" element={<Calendar />} />
      <Route path="/contact" element={<Contact />} /> 
      <Route path="/footer" element={<Footer />} />
    </Routes>
  </>
  );
}


export default App;
