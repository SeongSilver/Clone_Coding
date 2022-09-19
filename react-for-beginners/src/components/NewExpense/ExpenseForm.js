import React, { useState } from 'react';
import './ExpenseForm.css'

const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setenteredDate] = useState('');

    //같은 기능을 하는 여러 useState를 활용하는 방법
    // const [userInput, setUserInput] = useState({
    //     enteredTitle:'',
    //     enteredAmount:'',
    //     enteredDate:''
    // })


    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
        // setUserInput({
        //     /*리액트에서 새로운 값이 업데이트될 때 해당 useState의 나머지 값들을 
        //     같이 업데이트 해주지 않으면 사라지게 되기 때문에 ...스프레드 연산자를 사용해서
        //     나머지 값들을 먼저 선언해주고 이벤트의 value값을 저장할 useState를 그 후에 적어준다
        //     */
        //     ...userInput,
        //     enteredTitle: event.target.value
        // })
        // setUserInput((prevState) => {
        //     return {...prevState, enteredTitle:event.target.value};
        // })
    }
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);

        // setUserInput({
        //     ...userInput,
        //     enteredAmount: event.target.value
        // })

        // setUserInput((prevState) => {
        //     return {...prevState, enteredAmount:event.target.value};
        // })
    }
    const dateChangeHandler = (event) => {
        setenteredDate(event.target.value);

        // setUserInput({
        //     ...userInput,
        //     enteredDate: event.target.value
        // })

        // setUserInput((prevState) => {
        //     return {...prevState, enteredDate:event.target.value};
        // })
    }

    const submitHandler = (event) => {
        event.preventDefault();

        const expensedData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        }

        props.onSaveExpenseData(expensedData);
        setEnteredTitle('');
        setEnteredAmount('');
        setenteredDate('');
    }
    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type="number" value={enteredAmount} min="0.01" step="0.01" onChange={amountChangeHandler} />
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type="date" value={enteredDate} min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler} />
                </div>
            </div>
            <div className='new-expense_-actions'>
                <button type="submit" >Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm;