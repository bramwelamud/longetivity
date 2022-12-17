import React, { useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import { useRef } from 'react';

function Navbar() {
    const menu= ['Patient Data Depersonalization','Clinical trials AI simulation','Predictions endpoints','Document analysis (lab test)','',]
    const [open, setOpen]=useState(false);
    const menuRef=useRef()
    const textRef=useRef()
    window.addEventListener('click', (e)=>{
        console.log(e.target===menuRef.current);
    })
  return (
    <div className='Navbar_header'>
        <div className="Navbar_header-info">
<img src={logo} alt="logo"  className='image-logo'/>
<h2>Longevity in time</h2>
<div className="Navbar_header-hd">
            <ul>
                <li>
                    <a href="http://">RESOURCES</a>
                </li>
                <li ><button className='btn-cd' onClick={()=>setOpen(!open)} ref={textRef}>SOLUTIONS</button></li>
                <li><a href="http://">SUPPORT</a></li>
                <li><a href="http://">PRICING</a></li>
                
            </ul>
        </div>
        {
             open&&(<div className='card'>
             <ul>
                 {
                     menu.map((menu)=><li key={menu} className='menu-frame'>
 {menu}
                     </li>)
                 }
             </ul>
         </div>)
        }
        </div>
        
       
        <div className="Navbar_header-pg">
            <h2>AN AI THAT CAN PREDICT<br></br> DISEASES OF YOUR PATIENTS AND HELP CURE THEM INTIME</h2>
        </div>
        <div className="Navbar_header-btn">
           <button className='Navbar-btn' href='../Contact/Contact'>BOOK DEMO</button>
        </div>
        <div className="Navbar_header-ft">
            <h3>Discover our Solutions for Business and Doctors</h3>
        </div>
        
        
        </div>

  )
}


export default Navbar