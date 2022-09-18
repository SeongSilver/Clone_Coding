import React from 'react';
import ExpenseItem from "./ExpenseItem.js";
import Card from "../UI/Card.js";
import './Expense.css';
import ExpenseFilter from '../ExpensesFilter/ExpenseFilter.js';

const Expense = (props) => {
    return (
        <Card className="expenses">
            <ExpenseFilter/>
            <ExpenseItem
                id={props.items[0].id}
                title={props.items[0].title}
                amount={props.items[0].amount}
                date={props.items[0].date}
            />
            <ExpenseItem
                id={props.items[1].id}
                title={props.items[1].title}
                amount={props.items[1].amount}
                date={props.items[1].date}
            />
            <ExpenseItem
                id={props.items[2].id}
                title={props.items[2].title}
                amount={props.items[2].amount}
                date={props.items[2].date}
            />
            <ExpenseItem
                id={props.items[3].id}
                title={props.items[3].title}
                amount={props.items[3].amount}
                date={props.items[3].date}
            />
        </Card>
    )
}

export default Expense;