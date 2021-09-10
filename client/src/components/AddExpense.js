import React, { useState, useContext } from "react";
import { ExpenseContext } from "../context/ExpenseContext";

const AddExpense = () => {
  const [expenseName, setExpenseName] = useState("");
  const [expenseCost, setExpenseCost] = useState("");
  var [expenses, setExpenses] = useContext(ExpenseContext);

  const updateExpenseName = (e) => {
    setExpenseName(e.target.value);
  };

  const updateExpenseCost = (e) => {
    setExpenseCost(e.target.value);
  };

  const addExpense = (e) => {
    e.preventDefault();
    setExpenses((prevExpenses) => [
      ...prevExpenses,
      { name: expenseName, cost: expenseCost },
    ]);

    fetch("http://localhost:8000/addexpense", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: "Books", cost: 500 }),
    }).then((response) => {
      if(response.ok){
      console.log("fetch working");
      }else{
        throw new Error('HTTP Error' + response.status)
      }
    });
  };

  return (
    <div className="expense-form">
      <form onSubmit={addExpense}>
        <input
          type="text"
          value={expenseName}
          name="expense-name"
          onChange={updateExpenseName}
          className="name-input"
          required
        />
        <input
          type="number"
          value={expenseCost}
          name="expense-cost"
          onChange={updateExpenseCost}
          className="cost-input"
          required
        />
        <button type="submit" className="add-btn">
          Add Expense
        </button>
      </form>
    </div>
  );
};

export default AddExpense;
