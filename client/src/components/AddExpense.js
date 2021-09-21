import React, { useState, useContext, useEffect } from "react";
import { ExpenseContext } from "../context/ExpenseContext";
import {axios} from 'axios';

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

  const addExpense = async (e) => {
    e.preventDefault();

    let expense = {
      name: expenseName, 
      cost: expenseCost
    }


     
    // fetch("http://localhost:8000/addexpense", {
    //   method: "POST",
    //   headers: {
    //    // "Accept": "application/json",
    //     "Content-Type": "application/json",
    //   },
    //   body:  JSON.stringify({ name: expenseName, cost: expenseCost }),
    // })
    
    // const content = await rawResponse.JSON();

    // console.log(content);

    const config = {
      headers: {
        'Content-Type': 'application/json',
      }
    }
    try {
      const res = await axios.post('api/v1/transactions', expense, config); 
    } catch (err) {
      console.log(err);
    }
  
    setExpenses((prevExpenses) => [
      ...prevExpenses,
      expense,
    ]);
  
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
