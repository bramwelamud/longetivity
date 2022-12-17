import React from 'react'
import './model.css'
import brain from '../Assets/Group 4754.png'
import phone from '../Assets/Vector.png'
import Model from '..Model/model'
import  main from '../Assets/Vector (2).png'



function model() {
  return (
    <div className='model-start'>
        <div className="model-api">
            <h2>solution</h2>
            <tr className='model-sain'><td className='sam'>
            <a href="http://">DEPERSONALIZATION</a></td>
            <td className='sam'><a href="http://">prediction</a></td>
            <td className='sam'><a href="http://">custom prediction models</a></td>
            <td className='sam'><a href="http://">document analysis</a></td>
            <td className='sam'><a href="http://">Data structure</a></td></tr>
            <div className="contact-solution">
                <tr>
                    <td><img src={brain} alt="" /></td>
                    <td>DEPERSONALIZATION/ API <br />
                    Remove  information that can identify patient <br />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque laborum labore quam pariatur voluptatibus hic dolor officia beatae dolores inventore, sint, est facere eos, illo facilis deleniti vero? Optio, ratione.
          </td>

                </tr>
            </div>
            <div className="contact-solution-app">
              <h2>solution/ App</h2>
              <tr>
                <td>
                  <img src={phone} alt="" />
                  <td>
                    <h5>Patient connecter</h5>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad maiores, molestiae eos necessitatibus at optio assumenda beatae temporibus dicta rerum repellat sit accusamus atque hic asperiores quidem! Provident, amet adipisci!</p>
                  </td>
                
                </td>
              </tr>
            </div>
            <div className="contact-solution-vector-2">
              <h2>solution/simulation</h2>
            <tr>

              <td>
                <img src={main} alt="" />
              </td>
              <td><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit a ducimus excepturi laboriosam aperiam maxime saepe harum quo aliquid temporibus. Aut corrupti vitae illum quae corporis incidunt praesentium libero facilis!</p></td>
            </tr>
            </div>
        </div>
    </div>
  )
}

export default model