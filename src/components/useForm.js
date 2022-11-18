import { useState,useEffect } from "react";
import { default as axios } from 'axios';



const useForm = (callback,validate,) => {
    const [values, setvalues] = useState({
        name: '',
        email: '',
        email2: '',
        
        
    })
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isError, setIsError] = useState("");

    const handleChange = e => {
        const {name, value} = e.target
        setvalues({
            ...values,
            [name]: value
            
            
        });
        //console.log(values);
    };

    const handleSubmit = e =>{
        e.preventDefault();
        
        setErrors(validate(values));
        setIsSubmitting(true);

        const name = e.target.name.value;
        const email = e.target.email.value;
        const email2 = e.target.email2.value;
        const data = {name, email, email2};
        
    
        axios.post("https://us-central1-blinkapp-684c1.cloudfunctions.net/fakeAuth",data)
        .then((response) =>{
            console.log(response);
            

        })
        .catch((error) =>
        setIsError(error.message)
        );
       
    };
    

    
    useEffect(()=> {
        if(Object.keys(errors).length === 0 && 
        isSubmitting){
            callback();
        }
    }, [callback, errors, isSubmitting])

    return {handleChange, values, handleSubmit, isError, errors};
};

export default useForm;