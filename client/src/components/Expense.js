import React, {useContext, useEffect} from "react";
import {axios} from 'axios';

import {ExpenseContext} from '../context/ExpenseContext';

const Expense = ({name, cost, key}) => {

  var [expenses, setExpenses] = useContext(ExpenseContext);
  // const { deleteExpense } = useContext(ExpenseContext);

  // function deleteHandler(){
  //      deleteExpense();
  // }
  async function deleteExpense(id){
    // console.log(name)
    // // console.log(expenses.length)
    // expenses = expenses.filter(_expense => _expense.name !== name)
    // setExpenses(expenses)
    // console.log(expenses)
    try {
       await axios.delete(`/api/v1/transactions/${id}`)
    } catch (err) {
      console.log(err);
    }
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
        <button className='del-btn' onClick={deleteExpense(key)}>X</button>
      </div>
    </div>
    </div>
  );
};

export default Expense;
