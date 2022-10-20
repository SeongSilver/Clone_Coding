import React, { useState } from 'react';
import Expense from "./components/Expense/Expense";
import NewExpense from './components/NewExpense/NewExpense';

const DUMMY_EXPENSES = [
    {
        id: 'e1',
        title: 'Toilet Paper',
        amount: 94.12,
        date: new Date(2020, 7, 14),
    },
    {
        id: 'e2',
        title: 'New TV',
        amount: 799.49,
        date: new Date(2021, 2, 12)
    },
    {
        id: 'e3',
        title: 'Car Insurance',
        amount: 294.67,
        date: new Date(2021, 2, 28),
    },
    {
        id: 'e4',
        title: 'New Desk (Wooden)',
        amount: 450,
        date: new Date(2021, 5, 12),
    },
];

const App = () => {
    const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

    const addExnepseHandler = (expense) => {
        // setExpenses([expense, ...expenses]);

        //위의 코드보다 동일한 상티의 이전 스냅샷을 기반으로 하는 경우에
        //상태를 업데이 할 수 있는 깔끔한 방법이다
        setExpenses((prevExpenses) => {
            return [expense, ...prevExpenses]
        })
        console.log(expense)
    }

    // //원래 리액트의 형식
    // return React.createElement(
    //     'div',
    //     {},
    //     React.createElement('h2', {}, "legacy React"),
    //     React.createElement(Expense, {items:expenses})
    // );

    return (
        <div>
            <NewExpense onAddExpense={addExnepseHandler} />
            <Expense items={expenses} />
        </div>
    );
}

export default App;