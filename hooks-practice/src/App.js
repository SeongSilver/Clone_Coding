import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom";
import UsePreventLeave from './usePreventLeave';
import UseBeforeLeave from './useBeforeLeave';
import UseFadeIn from './useFadeIn';
import UseNetwork from './useNetwork';
import UseScroll from './useScroll';
import UseFullScreen from './useFullScreen';

const App = () =>{
  return(
    <div className="App">
      {/* <h3>얘는 App 컴포넌트</h3>
      <div>Hi</div>
      <UsePreventLeave/>
      <UseBeforeLeave/>
      <UseFadeIn/>
      <UseNetwork/> */}
      {/* <UseScroll/> */}
      <UseFullScreen/>
    </div>
  )
}

export default App;