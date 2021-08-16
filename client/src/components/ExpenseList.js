import React, {useContext, useEffect} from "react";
import Expense from "./Expense";
import {ExpenseContext} from '../context/ExpenseContext';


const ExpenseList = () => {

    const [expenses, setExpenses] = useContext(ExpenseContext);

  
   return (
    <div className="expense-list">
      {
       expenses.map((expense) => (
           <Expense name={expense.name} cost={expense.cost}/>
       ))
      }
    </div>
  );
};

export default ExpenseList;
