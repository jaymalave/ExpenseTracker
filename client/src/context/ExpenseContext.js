import React, {useState, createContext} from "react";

//context
export const ExpenseContext = createContext();



//provider
export const ExpenseProvider = (props) => {
    const [expenses, setExpenses] = useState([]);
    return (
      <ExpenseContext.Provider value = {[expenses, setExpenses]}>
      {props.children}
      </ExpenseContext.Provider>
    );
}