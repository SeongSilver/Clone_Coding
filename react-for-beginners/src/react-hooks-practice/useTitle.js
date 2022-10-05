import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom";

const useTitles = (initialTitle) => {
    const [title, setTitle] = useState(initialTitle);
    const updateTitle =  () => {
        const htmlTitle = document.querySelector("title");
        htmlTitle.innerText = title;
    }
    useEffect(updateTitle, [title]);
    return setTitle;
}
 
const useTitle = () =>{
    const titleUpdater = useTitles("Loading...");
    setTimeout(()=>titleUpdater("home"), 3000);
    return(
    <div className="useTitle">
        <h3>얘는 useTitle컴포넌트</h3>
    </div>
)
}

export default useTitle;