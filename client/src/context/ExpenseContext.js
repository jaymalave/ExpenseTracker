import React, {useState, useReducer,createContext} from "react";
import {axios} from 'axios';

//context
export const ExpenseContext = createContext();


// function deleteExpense(){
//   console.log("this is deleteExpense function")
// }


//provider
export const ExpenseProvider = (props) => {
    var [expenses, setExpenses] = useState([]);
    return (
      <ExpenseContext.Provider value={[expenses, setExpenses]}>
      {props.children}
      </ExpenseContext.Provider>
    );
}