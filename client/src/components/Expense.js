import React, {useContext} from "react";

import {ExpenseContext} from '../context/ExpenseContext';

const Expense = ({name, cost}) => {

  const [expenses, setExpenses] = useContext(ExpenseContext);
  // const { deleteExpense } = useContext(ExpenseContext);

  // function deleteHandler(){
  //      deleteExpense();
  // }

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
        <button className='del-btn'>X</button>
      </div>
    </div>
    </div>
  );
};

export default Expense;
