import React from "react";

const Expense = ({name, cost}) => {
  return (
      <div className='expense-main'>
    <div className="expense-card">
      <div className="expense">
        <div className="name-prop">
          <h3>{name}</h3>
        </div>
        <div className="cost-prop">
          <h3>{cost}</h3>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Expense;
