import React from 'react';
import './ExpenseFilter.css';

//값을 부모 컴포넌트로 보내는 방법 강의
//https://www.udemy.com/course/best-react/learn/lecture/28517397#overview

const ExpensesFilter = (props) => {


    const yearChangeHandler = (event) => {
        props.onChangeFilter(event.target.value);
    }

    return (
        <div className='expenses-filter'>
            <div className='expenses-filter__control'>
                <label>Filter by year</label>
                <select value={props.selected} onChange={yearChangeHandler}>
                    <option value='2022'>2022</option>
                    <option value='2021'>2021</option>
                    <option value='2020'>2020</option>
                    <option value='2019'>2019</option>
                </select>
            </div>
        </div>
    );
};

export default ExpensesFilter;