import React, { useState } from 'react';
import ExpenseItem from "./ExpenseItem.js";
import Card from "../UI/Card.js";
import './Expense.css';
import ExpenseFilter from '../ExpensesFilter/ExpenseFilter.js';

const Expense = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
    }

    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear
    })

    return (
        <div>
            <Card className="expenses">
                <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
                {filteredExpenses.map((expense, idx) => {
                    return (
                        <ExpenseItem
                            key={expense.id ? expense.id : idx}
                            title={expense.title}
                            amount={expense.amount}
                            date={expense.date}
                        />)
                })}

            </Card>
        </div>
    )
}

export default Expense;