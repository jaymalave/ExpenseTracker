import React, {useContext, useEffect} from "react";
import Expense from "./Expense";
import {ExpenseContext} from '../context/ExpenseContext';


const ExpenseList = () => {

    var [expenses, setExpenses] = useContext(ExpenseContext);

  
   return (
    <div className="expense-list">
      {
       expenses.map((expense) => (
  
           <Expense key={Math.random()} name={expense.name} cost={expense.cost}/>
       ))
      }
    </div>
  );
};

export default ExpenseList;
