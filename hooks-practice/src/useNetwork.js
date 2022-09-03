import React, {useState, useEffect, useRef} from 'react';

const useNetworks = onChange => {
    const [status, setStatus] = useState(navigator.onLine);
    const handleChange = () => {
        if(typeof onChange === "function"){
            onChange(navigator.onLine);
        }
        setStatus(navigator.onLine);

    };
    useEffect(() => {
        window.addEventListener("online", handleChange);
        window.addEventListener("offline", handleChange);
        return () => {
            window.removeEventListener("online", handleChange);
            window.removeEventListener("offline", handleChange);
        }
    }, [])
    return status;
}

const useNetwork = () => {
    const handleNetworkChange = (online) => {
        console.log(online ? "We just went online":"We are offline")
    }
    const onLine = useNetworks(handleNetworkChange);
    return(
        <div className="useNetwork">
            <h1>2.5 유즈네트워크</h1>
            <h2>{onLine ? "Online": "Offline"}</h2>
            <br/>
        </div>
    )
}

export default useNetwork;