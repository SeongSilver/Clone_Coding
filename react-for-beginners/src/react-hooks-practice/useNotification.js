import React, {useState, useEffect, useRef} from 'react';

//윈도우에 크롬알림이 가게끔 하는 기능
const useNotifications = (title, options) => {
    if(!("Notification" in window)){
        return;
    }
    const fireNotif = () => {
        if(Notification.permission !== 'granted'){
            Notification.requestPermission()
            .then(permission => {
                if(permission ==="granted"){
                    new Notification(title, options);
                }else{
                    return;
                }
            });
        }else{
            new Notification(title, options);
        }
    }
    return fireNotif;
}

const useNotification = () => {
    const triggerNotif = useNotifications("알림테스트", {
        body:"테스트 완료여"
        
    });
    return(
        <div className="useNotification">
            <h1>2.7 유스노티피케이션</h1>
            <button onClick={triggerNotif}>Hello</button>
        </div>
    )
}

export default useNotification;