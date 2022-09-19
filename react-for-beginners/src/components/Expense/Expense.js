import React, { useState } from 'react';
import Card from "../UI/Card.js";
import './Expense.css';
import ExpenseFilter from '../ExpensesFilter/ExpenseFilter.js';
import ExpensesList from './ExpensesList.js';

const Expense = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
    }

    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear
    })

    //조건부 컨텐츠
    //각각 다른 상황에서 다양한 값을 출력 하는 것
    //JSX에서는 IF문을 사용할 수 없고 삼항연산자를 사용한다

    //삼항연산자가 코드 가독성이 떨어진다면 논리곱 논리합의 단축평가를 사용한다
    //|| 는 둘중하나라도 맞으면 왼쪽 값을 출력하고 &&는 둘다 맞으면 오른쪽 값을 출력한다

    // //변수에 담아서 사용도 가능하다
    // let expenseContent = <p>No expenses found.</p>;
    // if (filteredExpenses.length > 0) {
    //     expenseContent = filteredExpenses.map((expense, idx) => {
    //         return (
    //             <ExpenseItem
    //                 key={expense.id ? expense.id : idx}
    //                 title={expense.title}
    //                 amount={expense.amount}
    //                 date={expense.date}
    //             />)
    //     })
    // }
    return (
        <div>
            <Card className="expenses">
                <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
                {/* ###삼항연산자 사용
                {filteredExpenses.length === 0 ?
                    (<p>No expenses found.</p>) : (filteredExpenses.map((expense, idx) => {
                        return (
                            <ExpenseItem
                                key={expense.id ? expense.id : idx}
                                title={expense.title}
                                amount={expense.amount}
                                date={expense.date}
                            />)
                    }))} */}

                {/* ###단축평가 활용
                {filteredExpenses.length === 0 && <p>No expenses found.</p>}
                {filteredExpenses.length > 0 && filteredExpenses.map((expense, idx) => {
                    return (
                        <ExpenseItem
                            key={expense.id ? expense.id : idx}
                            title={expense.title}
                            amount={expense.amount}
                            date={expense.date}
                        />)
                })} */}

                <ExpensesList items={filteredExpenses} />
            </Card>
        </div>
    )
}

export default Expense;