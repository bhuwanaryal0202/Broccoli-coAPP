export default function validateInfo(values){
    let errors ={}

    //Full Name

    if(!values.name.trim()){
        errors.name = "Fullname required";
    } else if (values.name.length < 3){
        errors.name = "Fullname must be 3 characters or more";
    }

    //Email
    if(!values.email){
        errors.email = "Email required";
    } else if(!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i.test(values.email)){
        errors.email = "Email address is invalid";
    }

    //Confirm Emai;
    if(!values.email2){
        errors.email2 = "Confirm Email required";
    } else if (values.email2 !== values.email){   //Both email should match
        errors.email2 = "Email do not match";   
    }

    return errors;

}