import React from 'react'
import './App.css'
import image from './images/bg.png'
import Popup from './components/Popup'
import {useState} from 'react';

function App() {

        const [buttonPopup, setButtonPopup] = useState(false);

  return (
    <div className='App'>
      
        <div className='navbar-container'>
            <h1 className='logo'>Broccoli & Co.</h1>
        </div>
        
        <div className='container' style={{ backgroundImage:`url(${image})` }}>
        <div data-testid="button_element" className="info">
          <h2>A Better way</h2>
          <h2>to enjoy every day.</h2>
          <p>Be the first to know when we launch.</p>
          <button data-testid="button" onClick={()=> setButtonPopup(true)} className='info-btn'>Request an invite</button>
          <Popup trigger={buttonPopup} setTrigger={setButtonPopup} >
          </Popup>
        </div> 
        </div>

        <div className='footer'>
          <p>Made with 🤍  from Bhuwan </p>
          <p> Copyright 2022 Broccoli & Co. All Right Reserved.</p>
        </div>
        
    </div>
  )
}

export default App