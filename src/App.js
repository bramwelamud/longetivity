import React from 'react';
import './App.css';
import Navbar from './Navbar/Navbar';
import Patient from './Patient/Patient';
import Word from './words/word'
import Contact from './Contact/contact';
import Features from './Features/Features';
import Model from './Model/model';



 



function App() {
  return (
  <div>
    <Navbar/>
    <Patient/>
    <Contact/>
    <Features/>
    <Model/>
    <Word/>
   
    
  </div>
  
  );
}

export default App;
