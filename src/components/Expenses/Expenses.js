import React, {useState} from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from "./ExpensesFilter";
import './Expenses.css';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020')

  const filteredChangeHandler = selectedYear => {
    setFilteredYear(selectedYear)
  }

  return (
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onChangeFilter={filteredChangeHandler}/>
      {props.items.map(item => {
        return <ExpenseItem
            title={item.title}
            amount={item.amount}
            date={item.date}
        />
      })}
    </Card>
  );
}

export default Expenses;
