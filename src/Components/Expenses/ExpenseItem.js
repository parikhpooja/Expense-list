import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';
import Card from '../UI/Card';
import React, {useState} from 'react';

const ExpenseItem = (props) => {

  const [title, setTitle] = useState(props.title);
  console.log('Expense item evaluated');

const ClickHandler = () => {
  setTitle('Updated');
  return (console.log('Clciked from the function'));
};

  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
      <button onClick={ClickHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;