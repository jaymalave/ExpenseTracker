import React from "react";

const Expense = ({name, cost}) => {
  return (
    <div class = "expense-card">
      <div class="expense">
        <div>
          <h3>{name}</h3>
        </div>
        <div>
          <h3>{cost}</h3>
        </div>
      </div>
    </div>
  );
};

export default Expense;
