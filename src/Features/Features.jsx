import React from 'react'
import './Features.css'

function Features() {
  return (
    <div className='features-info'>
        <div className="features-int">
        <card className="features-card">
            <h3>Starter</h3>
            <p>Boost your clinic exam fast <br />with help of Ai</p>
            <ul><li>
                prediction</li>
                <li>Depersonalization</li>
                <li>Data structuring</li>
                <li>up to 5 doctors</li>
                <l>$39/mo</l></ul>
        </card>
        <div className="features-card">
            <h3>Professional</h3>
            <p>For hospital and clinic who  <br /> wants to get personal experience</p>
            <ul>
                
                <li>All in startat</li>
                <li>10 custom models</li>
                <li> 100 doctors</li>
                <l>$39/mo</l></ul>
        </div>
        <div className="features-card">
            <h3>Entrprise</h3>
            <p>for organization that needs powerful tools <br /> and custom service</p>
            <ul>
                
                <li>All in professinal</li>
                <li>ulimited model and doctors</li>
                <li> multiple organization panel</li>
                <l><button className='btn-iza'>Contact sales</button></l></ul>
        </div>
        </div>
    </div>
  )
}

export default Features
