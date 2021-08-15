import React, {useContext} from "react";
import Expense from "./Expense";
import {ExpenseContext} from '../context/ExpenseContext';


const ExpenseList = () => {
    const [expenses, setExpenses] = useContext(ExpenseContext);
  return (
    <>
      {
       expenses.map((expense) => {
           <Expense name={expense.name} cost={expense.cost}/>
       })
      }
    </>
  );
};

export default ExpenseList;
