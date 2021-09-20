const mongoose = require("mongoose");

const expenseSchema = new mongoose.Schema({
  name: {
    type: String,
    default: "Default Value",
  },
  cost: {
    type: Number,
    default: 0,
  },
  spentAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("ExpenseDoc", expenseSchema);
