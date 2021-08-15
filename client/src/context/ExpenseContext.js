import React, {useState, createContext} from "react";

export const ExpenseContext = createContext();

export const ExpenseProvider = (props) => {
    const [expenses, setExpenses] = useState([]);
    return (
      <ExpenseContext.Provider value = {[expenses, setExpenses]}>
      {props.children}
      </ExpenseContext.Provider>
    );
}