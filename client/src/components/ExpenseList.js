import React, {useContext, useEffect} from "react";
import Expense from "./Expense";
import {ExpenseContext} from '../context/ExpenseContext';


const ExpenseList = () => {

    const [expenses, setExpenses] = useContext(ExpenseContext);

  
   return (
    <div>
    <h1>Hello</h1>
      {
      
       expenses.map((expense) => (
           <div>
           <h1>This is an expense</h1>
           <Expense name={expense.name} cost={expense.cost}/>
           </div>
       ))
      }
    </div>
  );
};

export default ExpenseList;
