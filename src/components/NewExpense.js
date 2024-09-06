import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setIsEditing(false); // При додаванні витрат приховуємо форму
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false); // При натисканні кнопки Cancel також приховуємо форму
  };

  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startEditingHandler} className="btn">
          Add Expense
        </button>
      )}
      {isEditing && (
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler} />
      )}
    </div>
  );
};

export default NewExpense;
