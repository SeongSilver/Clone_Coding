import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom";
import UsePreventLeave from './usePreventLeave';
import UseBeforeLeave from './useBeforeLeave';

const App = () =>{
  return(
    <div className="App">
      <h3>얘는 App 컴포넌트</h3>
      <div>Hi</div>
      <UsePreventLeave/>
      <UseBeforeLeave/>
    </div>
  )
}

export default App;