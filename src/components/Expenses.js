import React from 'react';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';

const Expenses = (props) => {
  const { items, children } = props;

  return (
    <div>
      
      <div className="expenses">
        {children}
        {items.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </div>
    </div>
  );
};

export default Expenses;
