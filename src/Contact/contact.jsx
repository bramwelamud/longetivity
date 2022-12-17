import React from 'react'
import facebook from '../Assets/facebook-new.png'
import twitter from '../Assets/twitter.png'
import instagram from '../Assets/instagram-new.png'

function contact() {
  return (
    <div className=' contact'>
      <div className="contact-info">
        <h2>book a demo</h2>
        <h4>Enter your Email:</h4>
        <input type="text" className='contact-info-inp'/>
      </div>
      <div className="textarea">
        <textarea name="" id="" cols="30" rows="10" placeholder='message here..'></textarea>
        
      </div>
      <div className="btn-submit">
        <button color='submit'>submit</button>
      </div>
      <div className="contact-icons">
<tr>
  <td><a href="http://"><img src={facebook} alt="" /></a></td>
  <td><a href="http://"><img src={twitter} alt="" /></a></td>
  <td><a href="http://"><img src={instagram} alt="" /></a></td>
</tr>
      </div>

    </div>
  )
}

export default contact