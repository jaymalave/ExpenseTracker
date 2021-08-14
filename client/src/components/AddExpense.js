import React, {useState} from "react";

const AddExpense = () => {

    const [expenseName, setExpenseName] = useState("")
    const [expenseCost, setExpenseCost] = useState("")

    const updateExpenseName = (e) => {
       setExpenseName(e.target.value);
    }

    const updateExpenseCost = (e) => {
        setExpenseCost(e.target.value)
    }

    return (
      <>
      <form>
        <input type="text" value={expenseName} name="expense-name" onChange={updateExpenseName}/>
        <input type="number" value={expenseCost} name="expense-cost" onChange={updateExpenseCost}/>
        <button>Add Expense</button>
      </form>
      </>
    );
}

export default AddExpense;