import React, { useState } from 'react'
import './Api.css'
import profile from '../Assets/OIP.png'
import logo from '../Assets/logo.png'
import icon from '../Assets/icons8-search-30.png'
import  Qrcode from 'react-qr-code'


function Api() {
  const {text, setText}=useState('')
 
  function handleChange(e){
    setText(e.value.value)
  }
  return (
    <div className='Api__intro'>
      <div className="Api__intro-sim">
        <div className="img-pro">


<img src={profile} alt="profile" className='profile-p1'  /> 
        </div>
     
<div className="logo-a2">
 
  <img src={logo} alt="logo"   className='logo-l2' />

</div>
<div className='Api__intro-h1'>
  <h2>Request Data</h2>
  <h4>Request patient data to run analysis</h4>
</div>

      </div>
    
    <div className="card-info">
      <card>
        <div className="card-heading">
<h2>Data Request</h2>
<tr>
          <th><input type="text" placeholder='cholestral,weight,age....' />
</th>
<th className='table-t2'><button className='btn-ico'><img src={icon} alt=""  className='img-ico'/></button></th>
          <th><h3>Group by:<button>disease</button></h3></th>
          <th className='type'>type</th>
          <th>measurement unit</th>
        </tr>
        </div>
        <div className='card-heading-btn'>
        <table>
        <tr>
          <th>Bluemarker Name</th>
          <th>Units</th>
          <th></th>
        </tr>
        <h2>Data Request</h2>

        <tr>
          <td>Cholesstral HDL</td>
          <td className='table-t3'>mg/dl,mmoml/L</td>
          <td><input type="checkbox" /></td>
        </tr>
        <tr>
          <td>Cholestral LDL</td>
          <td className='table-t3'>mg/dl,mmoml/L</td>
          <td><input type="checkbox" /></td>
        </tr>
        <tr>
          <td>Weight</td>
          <td className='table-t3'>Kg pounds</td>
          <td><input type="checkbox" /></td>
        </tr>
        <tr>
          <td>Age</td>
          <td className='table-t3'>years</td>
          <td><input type="checkbox" /></td>
        </tr>
        <tr>
          <td>Blood pressure</td>
          <td className='table-t3'>MMHg</td>
          <td><input type="checkbox" /></td>
        </tr>
      </table>
          
        </div>
      </card>
    </div>
    <div className="card-t2">
      <card className='card-t23'>
        <div className='caard-tinfo'>
         
          
          Request Id<input type="id" name="" id="kim-input" />
          <div className="card-dta">
          <tr>
          <td>Request saving data</td>
          
          <td><input type="checkbox" /></td>
        </tr>
          </div>
          <div>
           
            Experied by<input type="date" name="" id="kim-input" /></div>
            <div>Delete data after
              <input type="date" />
           </div>
          <div className="qr-code">
            <Qrcode value='link'/>
          </div>
          <div>
            <input type="text"  value={text} onChange={(e)=>{handleChange(e)}}/>
            <button>generate</button>
          </div>
        </div>
      </card>
    </div>
    </div>
  )
}


export default Api