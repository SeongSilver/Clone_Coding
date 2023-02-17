import React, { useRef, useState, useEffect } from 'react';

const SimpleInput = (props) => {
  const nameInputRef = useRef();
  const [enteredName, setEnteredName] = useState('');
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  useEffect = (() => {
    if (enteredNameIsValid) {
      console.log('이름이 유효합니다!')
    }
  },[enteredNameIsValid])

  const nameInputChangeHandler = event => {
    setEnteredName(event.target.value)
  }

  const formSubmissionHandler = event => {
    event.preventDefault();

    setEnteredNameTouched(true);
    
    if (enteredName.trim() === '') {
      setEnteredNameIsValid(false);
      return;
    }
    
    setEnteredNameIsValid(true);

    console.log("state쓴애" + enteredName)

    //키 하나하나 입력받을 때의 변화를 추적하고 싶은 떄는 state를
    //한번에 받은 값을 사용할 때는 ref를 사용하는 것이 좋다
    const enteredValue = nameInputRef.current.value;
    console.log("ref 쓴애" + enteredValue)

    //input에 값을 초기화 시킬 떄는 DOM요소를 직접적으로 건드리는 ref보다는
    //state를 사용해 리액트 DOM을 건드리는것이 바람직하다
    setEnteredName('');
  };

  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched

  const nameInputClasses = nameInputIsInvalid ? 'form-control invalid' : 'form-control'; 
  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input ref={nameInputRef} type='text' id='name' onChange={nameInputChangeHandler} />
        {nameInputIsInvalid && <p className="error-text">내용이 비어있으면 안됩니다</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
