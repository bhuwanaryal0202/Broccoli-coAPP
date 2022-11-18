import React from 'react'
import './Success.css'

const Success = () => {

    function refreshPage() {
        window.location.reload(false);
      }

  return (
    <div>
        <div className="form_content">
            <div className="form_success">
                <div data-testid='Alldone'className="h1_text">
                    All Done!
                </div>
                <div className="p_text">
                You will be one of the first to experience
               </div>
                
                <div className="p_text2">
                Broccoli & Co. When we launch 
               </div>
               <button data-testid="button_ok" className='button_ok' onClick={refreshPage}>ok</button>
            </div>
        </div>
    </div>
  )
}

export default Success