import React from 'react';
import Expense from "./components/Expense/Expense";

const App = () => {
    const expenses = [
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
            date: new Date(2021, 2, 12) },
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
    
    // //원래 리액트의 형식
    // return React.createElement(
    //     'div',
    //     {},
    //     React.createElement('h2', {}, "legacy React"),
    //     React.createElement(Expense, {items:expenses})
    // );

    return (
        <div>
            <h2>Let's get started!</h2>
            <Expense items={expenses}/>
        </div>
    );
}

export default App;