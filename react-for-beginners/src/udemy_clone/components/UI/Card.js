import React from 'react';
import './Card.css';

//공통된 CSS를 모아서 큰 틀 안에 가두고 사용하기 위한 래퍼 컴포넌트
const Card = (props) => {
    const classes = 'card ' + props.className;
    return (
        <div className={classes}>{props.children}</div>
    )
}

export default Card;