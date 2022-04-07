import Expenses from './Components/Expenses/Expenses';
import React from 'react';
import NewExpense from './Components/NewExpense/NewExpense';

const App = () => {
  const expenses = [
    {
      id: 'e1',
      title: 'Grocery',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'TV Cabinet', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Coffee Table',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New TV',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  return (
    <div>
      <NewExpense/>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;