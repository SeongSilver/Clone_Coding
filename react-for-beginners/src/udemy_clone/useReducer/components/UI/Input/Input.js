import React, { useRef, useImperativeHandle } from "react";
//useImperativeHandle : 컴포넌트나 컴포넌트 내부에서 오는 기능들을
//명령적으로 사용할 수 있게 함

import classes from "./Input.module.css";

//ref에 바인딩 될 수 있는 리액트 컴포넌트
const Input = React.forwardRef((props, ref) => {
  const inputRef = useRef();

  const activate = () => {
    inputRef.current.focus();
  };

  useImperativeHandle(ref, () => {
    return {
      //객체에는 외부에서 사용되는 모든 데이터를 담는다
      focus: activate,
    };
  });

  return (
    <div
      className={`${classes.control} ${
        props.isValid === false ? classes.invalid : ""
      }`}
    >
      <label htmlFor={props.id}>{props.label}</label>
      <input
        ref={inputRef}
        type={props.type}
        id={props.id}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
    </div>
  );
});

export default Input;
