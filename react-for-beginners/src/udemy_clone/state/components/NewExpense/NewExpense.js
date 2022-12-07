import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
    const [isEditing, setIsEdting] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
        setIsEdting(false);
    }

    const EditingHandler = () => {
        setIsEdting(!isEditing);
    }

    return (
        <div className='new-expense'>
            {!isEditing && <button onClick={EditingHandler}>Add New Expense</button>}
            {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={EditingHandler} />}
        </div>
    )
}

export default NewExpense;