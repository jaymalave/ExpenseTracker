import React, { useContext, useEffect } from "react";
import Expense from "./Expense";
import { ExpenseContext } from "../context/ExpenseContext";
import { axios } from "axios";

const ExpenseList = async () => {
  var [expenses, setExpenses] = useContext(ExpenseContext);

  try {
    const res = await axios.get("/api/v1/transactions");
    setExpenses(res.data.data);
  } catch (err) {
    console.log(err);
  }
 
  useEffect(() => {
     console.log("just to refresh the page");
  }, [expenses]);

  

  return (
    <div className="expense-list">
      {expenses.map((expense) => (
        <Expense key={expense._id} name={expense.name} cost={expense.cost} />
      ))}
    </div>
  );
};

export default ExpenseList;
