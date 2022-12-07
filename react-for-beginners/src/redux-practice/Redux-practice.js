import React, {useState} from 'react';
import './redux-practice.css';
import {createStore} from 'redux';
/*
    Provider : state를 어떤 컴포넌트들에게 제공할 것 인것에 대한 울타리를 제공하는 것
    useSelector : 어떤state값을 쓸지 선택하는 것
    useDispatch : state값을 변경시킬 때 시키는 것
    connect
*/
import {Provider, useSelector, useDispatch, connect} from 'react-redux';


//redcuer : 스토어 안에있는 state를 어떻게 바꿀 것인지 결정하는 것
//리듀서는 현재 state의값, 어떻게 바꿀것인지에 대한 요청을 받는 액션, 2개의 매개변수를 받는다
const reducer = (currentState, action) => {
//각각의 state를 불변하게 유지해야함 -> 새로운 state를 만드는데 과거의 state를 복제
    if(currentState === undefined){
        return {
            number: 1653,
        }
    }

    const newState = {...currentState};
    if(action.type === 'PLUS'){
        newState.number++;
    }
    if(action.type === 'MINUS'){
        newState.number--;
    }
    return newState;
}

const store = createStore(reducer);
 
const Left1 = (props) => {
    return(
        <div>
            <h1>Left1</h1>
            <Left2></Left2>
        </div>
    )
}

const Left2 = (props) => {
    console.log('2');
    return(
        <div>
            <h1>Left2</h1>
            <Left3></Left3>
        </div>
    )
}
const Left3 = (props) => {
    console.log('3');
    const number = useSelector((state) => state.number);
    return(
        <div>
            <h1>Left3 : {number}</h1>
        </div>
    )
}
const Right1 = (props) => {
    return(
        <div>
            <h1>Right1</h1>
            <Right2></Right2>
        </div>
    )
}

const Right2 = (props) => {
    return(
        <div>
            <h1>Right2</h1>
            <Right3></Right3>
        </div>
    )
}
const Right3 = (props) => {
    const dispatch = useDispatch();

    return(
        <div>
            <h1>Right3</h1>
            <input type="button" value="+" onClick={() => {
                dispatch({type: 'PLUS'})
            }}/>
            <input type="button" value="-" onClick={() => {
                dispatch({type: 'MINUS'})
            }}/>
        </div>
    )
}

const ReduxPractice = () => {
    return (
        <div className="container">
            <h1>Root</h1>
            <div className='grid'>
                <Provider store={store}>
                    <Left1 ></Left1>
                    <Right1 ></Right1>
                </Provider>
            </div>
        </div>
    )
}

export default ReduxPractice;