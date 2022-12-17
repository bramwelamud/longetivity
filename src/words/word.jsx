import React from 'react'
import './word.css'

function word() {
  return (
    <div className='word-info'>
      <div className="word-into">
        <h2>Developer</h2>
        <p>API access token and security details</p>
      </div>
      <div className="word-statics">
        <tr className='word-stati'>
            <td className='word-static'>
                <h3>statistic <br /></h3>
            </td>
            <td className='word-static'>
                <h3>mobile</h3>
            </td>
            <td className='word-static'>
                <h3>keys</h3>
            </td>
        </tr>
        <div className="word-separate">
            <div className="word-keys">
                <h1>keys</h1>
                <input type="password" />
                
                <br />
                <a href="http://">statistics</a>
                <div className="word-input">
                <input type="password" /><br />
                <a href="http://">Revoke</a>
                <br /> <br />
                <button>+ New keys</button>
            </div>
            </div>
           
            <div className="word-keys-sm">
                <h2>keep keys private <br /> keep keys safe</h2>
                <p>follow recommendation for keys safe <b> <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam facere vitae quisquam cumque similique voluptas quia modi porro, suscipit vel! Eum doloribus libero debitis inventore quia itaque commodi quasi fuga.</b></p>
            </div>
        </div>
      </div>
      <div className="graph">
      <div className="word-into">
        <h2>Developer</h2>
        <p>API access token and security details</p>
      </div>
<tr className='word-stati'>
<td className='word-static'>
                <h3>statistic <br /></h3>
            </td>
            <td className='word-static'>
                <h3>mobile</h3>
            </td>
            <td className='word-static'>
                <h3>keys</h3>
            </td>
</tr>
      </div>
      <div className="word-satu">
        <h1>Usage</h1>
        <tr>
            <td></td>
            <td className='word-sum'>Today</td>
            <td className='word-sum'>Month</td>
        </tr>
        <tr>
            <td className='word-sum'>Total API calls </td>
            <td className='word-sum'>**** <br />-10%</td>
            <td className='word-sum'>**** <br />-2% </td>
        </tr>
        <tr>
            <td className='word-sum'>Estimate cost</td>
            <td className='word-sum'>$****</td>
            <td className='word-sum'>$****</td>
        </tr>
        
            <h3>per key usage</h3>
            <tr>
                <td className='word-sum'><input type="password" /></td>
                <td className='word-sum'>****</td>
                <td className='word-sum'>****</td>
            </tr>
            <tr c>
                <td className='word-sum'><input type="password" /></td>
                <td className='word-sum'> ****</td>
                <td className='word-sum'>****</td>
            </tr>
            <br />
            <button>Show more</button>
        
      </div>
    </div>
  )
}

export default word
