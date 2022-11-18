import React from 'react'
import useForm from './useForm'
import validate from './validateInfo'



const Form = ({submitForm}) => {
   
    const {handleChange, values, handleSubmit,isError,errors} = useForm(submitForm, validate);
   
   
    
  return (
    <div>
       <h3>Request an invite</h3>
       
        <form  data-testid="popup_form" className="popup_form" onSubmit={handleSubmit} >
            <input className='form_input'  placeholder='Fullname' type="text" name="name" value={values.name} onChange={handleChange} />
            {errors.name && <p>{errors.name}</p>}
            <input className='form_input' placeholder='Email' type="email" name="email" value={values.email} onChange={handleChange} />
            {errors.email && <p>{errors.email}</p>}
            <input className='form_input' placeholder='Confirm Email' type="email" name="email2" value={values.email2} onChange={handleChange} />
            {errors.email2 && <p>{errors.email2}</p>}
            
            <div className="control">
                <button data-testid="button_Submit" className='button' type='submit'>Submit</button>
                {isError !== "" && <p>{isError}</p> }
            </div>       
        </form>
    </div>
  )
}

export default Form;