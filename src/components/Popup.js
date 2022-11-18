import React, { useState } from 'react'
import './Popup.css'
import Form from './Form';
import Success from './Success';
import { AiOutlineClose } from 'react-icons/ai';


function Popup(props) {
    

    const [isSubmitted, setIsSubmitted] = useState(false);

    function submitForm(){
        setIsSubmitted(true);
    }
    
  return (props.trigger) ? (
    <div className='popup'>
        <div className="popup_inner">
            
            
            {!isSubmitted ? <Form submitForm={submitForm} /> : <Success />}
            <br />
            <button onClick={() => props.setTrigger(false) } className="close_btn" > <AiOutlineClose></AiOutlineClose></button>
            {props.children}
        
        </div>
    </div>
  ):"";
}

export default Popup;