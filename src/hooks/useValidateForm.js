import { useState } from "react";

export default function useFormValidation() {

    const [values, setValues] = useState({});
    const [emailError, setEmailError] = useState('');
    const [errors, setErrors] = useState({});
    const [isValid, setIsValid] = useState(false);


    function handleChange(evt) {
       const {name, value} = evt.target;
        if (name === 'email') {
            const validEmail = /^\S+@\S+\.\S+$/.test(value)
            if (!validEmail) {
                setEmailError('Email указан неверно');
            } else {
                setEmailError('');
            }
        }

    setValues({...values, [name]:value});
    setIsValid(evt.target.closest('form').checkValidity());
    setErrors({...errors, [name]:evt.target.validationMessage});
    };


 return{values, errors, isValid, handleChange, setValues, setIsValid, emailError };
}