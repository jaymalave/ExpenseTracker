import "./App.css";
import Balance from "./components/Balance";
import ExpenseList from "./components/ExpenseList";
import AddExpense from "./components/AddExpense";
import { ExpenseProvider } from "./context/ExpenseContext";
import React, { useEffect } from "react";

function App() {
  useEffect(() => {
    fetch("http://localhost:8000/", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        console.log(response.body);
        response.json();
      })
      .then((data) => console.log(data));
  }, []);

  return (
    <ExpenseProvider>
      <div className="App">
        <h1>Expense Tracker</h1>
        <Balance />
        <AddExpense />
        <ExpenseList />
      </div>
    </ExpenseProvider>
  );
}

export default App;
