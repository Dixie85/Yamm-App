import { useState } from "react";
import Button from "../Button/Button";
import "./InputForm.css";

const postURL = 'http://localhost:8080/api/newrecipe'

const InputForm = ({showRecipes}) => {

  const [inputCategoryValue, setInputCategoryValue] = useState('');
  const [inputInstructionsValue, setInputInstructionsValue] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const onInputsubmit = (e) => {
    e.preventDefault();
    if (inputCategoryValue.length < 1 &&
      inputInstructionsValue.length < 1 ) {
      setErrorMessage('Field cannot be empty!');
      return
    }
    const body = {
      category: inputCategoryValue,
      instructions: inputInstructionsValue,
    }
    console.log(inputCategoryValue); 
    console.log('making post req to backend', postURL);
    fetch(postURL, {
      method: 'POST',
      headers: {
        // Accept: 'application.json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body),
      cache: 'default'
    }) 
    setInputCategoryValue('');
    setInputInstructionsValue('');
    setErrorMessage('');
    showRecipes()
  };

  return (
    <section className="user-input">
      <form className="user-input__form">
        <input
          type="text"
          name="categoryInput"
          className="user-input__input-field"
          value={inputCategoryValue}
          placeholder="Insert category"
          onChange={(e) => setInputCategoryValue(e.target.value)}
        />
        <textarea
          name="instructionsInput"
          className="user-input__input-field"
          value={inputInstructionsValue}
          rows="4" 
          cols="50"
          placeholder="Insert instructions"
          onChange={(e) => setInputInstructionsValue(e.target.value)}
        ></textarea>
        <Button
          className={"user-input__formBtn"}
          text={"Add"}
          onButtonClick={(e) => onInputsubmit(e)}
        />
        {!errorMessage < 1 && <span className="info__span-error-message">{errorMessage}</span>}
      </form>
    </section>
  );
};

export default InputForm;
