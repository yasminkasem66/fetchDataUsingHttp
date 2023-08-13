import {  useState } from "react";
import useInput from "../../hooks/use-input";

const SimpleInput = (props) => {
  const {
    value:name,
    IsTouched:nameIsTouched,
    valueIsValid:nameIsValid,
    hasError:namehasError,
    valueChangeHandler:nameChangeHandler,
    valueBlurHandler:nameBlurHandler,
    reset:namereset
  } = useInput((value) => value.trim() !== "");
  // const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
  // Because entered name is valid is simply something we can derive from the entered name state,
  const [enteredEmail, setEnteredEmail] = useState("");
  const [emailIsTouched, setEmailIsTouched] = useState(false);

  const enteredEmailIsValid = enteredEmail.includes("@");

  const emailInputIsInvalid = emailIsTouched && !enteredEmailIsValid;

  let formIsValid = false;
  if (nameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }


  const emailInputChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const submitFormHandler = (event) => {
    event.preventDefault();
     setEnteredEmail(true);
    if (!nameIsValid && !emailInputIsInvalid) {
      return;
    }
    namereset();
    setEnteredEmail("");
    setEmailIsTouched(false);

    // nameRef.current.value = '';  //bad practice don't use it
  };


  const emailBlurHandler = () => {
    console.log("dddd");
    setEmailIsTouched(true);
  };

  const nameInputClass = namehasError
    ? " form-control invalid"
    : "form-control";
  const emailInputClass = emailInputIsInvalid
    ? " form-control invalid"
    : "form-control";

  return (
    <form onSubmit={submitFormHandler}>
      <div className={nameInputClass}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
          value={name}
        />
        {namehasError && (
          <p className="error-text"> name must not be empty</p>
        )}
      </div>
      <div className={emailInputClass}>
        <label htmlFor="email">Your Email</label>
        <input
          type="email"
          id="email"
          onChange={emailInputChangeHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail}
        />
        {emailInputIsInvalid && (
          <p className="error-text"> email must be valid</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
