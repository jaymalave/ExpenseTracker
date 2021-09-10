import React, {useContext, useEffect} from "react";

import {ExpenseContext} from '../context/ExpenseContext';

const Expense = ({name, cost}) => {

  var [expenses, setExpenses] = useContext(ExpenseContext);
  // const { deleteExpense } = useContext(ExpenseContext);

  // function deleteHandler(){
  //      deleteExpense();
  // }
  function deleteExpense(){
    console.log(name)
    // console.log(expenses.length)
    expenses = expenses.filter(_expense => _expense.name !== name)
    setExpenses(expenses)
    console.log(expenses)
  }


  useEffect(() => {
    console.log('useEffect worked')
  }, []);

  return (
      <div className='expense-main'>
    <div className="expense-card">
      <div className="expense">
        <div className="name-prop">
          <h3>{name}</h3>
        </div>
        <div className="cost-prop">
          <h3>{cost}</h3>
        </div>
        <button className='del-btn' onClick={deleteExpense}>X</button>
      </div>
    </div>
    </div>
  );
};

export default Expense;
