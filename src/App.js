import React, { useState, useEffect } from 'react';
import Expenses from './components/Expenses';
import NewExpense from './components/NewExpense';
import ExpensesFilter from './components/ExpensesFilter';
import Chart from './components/Chart';
import Loader from './components/Loader';
import { getExpenses, addExpense } from './expenseService';
import './App.css';

const App = () => {
  const [expenses, setExpenses] = useState([]);
  const [filteredYear, setFilteredYear] = useState('2021');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchExpenses = async () => {
      setLoading(true);
      try {
        const expensesData = await getExpenses();
        setExpenses(expensesData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching expenses: ', error);
        setLoading(false);
      }
    };

    fetchExpenses();
  }, []);

  const addExpenseHandler = async (expense) => {
    try {
      await addExpense(expense);
      setExpenses((prevExpenses) => [expense, ...prevExpenses]);
    } catch (error) {
      console.error('Error adding expense: ', error);
    }
  };

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const allExpenses = expenses.filter((expense) => {
    return new Date(expense.date).getFullYear().toString() === filteredYear;
  });

  const chartDataPoints = [
    { label: 'Jan', value: 0 },
    { label: 'Feb', value: 0 },
    { label: 'Mar', value: 0 },
    { label: 'Apr', value: 0 },
    { label: 'May', value: 0 },
    { label: 'Jun', value: 0 },
    { label: 'Jul', value: 0 },
    { label: 'Aug', value: 0 },
    { label: 'Sep', value: 0 },
    { label: 'Oct', value: 0 },
    { label: 'Nov', value: 0 },
    { label: 'Dec', value: 0 },
  ];

  for (const expense of allExpenses) {
    const expenseMonth = new Date(expense.date).getMonth();
    chartDataPoints[expenseMonth].value += expense.amount;
  }

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
      {loading ? <Loader /> : null}
      <Expenses items={allExpenses} >
      <Chart dataPoints={chartDataPoints} />
      </Expenses>
      
    
    </div>
  );
};

export default App;
