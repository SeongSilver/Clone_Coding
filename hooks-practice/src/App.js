import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom";
import UseClick from './useClick';

const App = () =>{
  return(
    <div className="App">
      <h3>얘는 App 컴포넌트</h3>
      <div>Hi</div>
      <UseClick/>
    </div>
  )
}

export default App;