import { useState } from "react";

  const useInput=(validateFn)=>{
    const [value, setvalue] = useState('');
    const [IsTouched, setIsTouched] = useState(false);

    const valueIsValid =  validateFn(value);
    const hasError = IsTouched && !valueIsValid;

    const valueChangeHandler = (event) => {
        setvalue(event.target.value);
      }
      const valueBlurHandler = () => {
        setIsTouched(true);
      }

    const reset=()=>{
        setvalue('');
        setIsTouched(false);
    }

    return {
        value,
        IsTouched,
        valueIsValid,
        hasError,
        valueChangeHandler,
        valueBlurHandler,
        reset
    }
  
  

 }


 export default useInput;