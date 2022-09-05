import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom";
import UsePreventLeave from './usePreventLeave';
import UseBeforeLeave from './useBeforeLeave';
import UseFadeIn from './useFadeIn';
import UseNetwork from './useNetwork';
import UseScroll from './useScroll';
import UseFullScreen from './useFullScreen';
import UseNotification from './useNotification';
import useAxios from './useAxios';

const App = () =>{
  const {loading, data, error} = useAxios({
    url:"https://yts.am/api/v2/list_movies.json"
  });
  console.log(`Loading : ${loading} \nError:${error} \nData:${JSON.stringify(data)}`);
  return(
    <div className="App">
      {/* <h3>얘는 App 컴포넌트</h3>
      <div>Hi</div>
      <UsePreventLeave/>
      <UseBeforeLeave/>
      <UseFadeIn/>
      <UseNetwork/> */}
      {/* <UseScroll/> */}
      {/* <UseFullScreen/> */}
      {/* <UseNotification/> */}
      <h1>hello</h1>
    </div>
  )
}

export default App;