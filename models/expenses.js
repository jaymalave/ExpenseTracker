const mongoose = require('mongoose')

const expenseSchema = new mongoose.Schema({
  name: {
    type: String,
    default: "Default Value"
  },
  cost: {
    type: Number,
    default: 0
  }
})

module.exports = mongoose.model('ExpenseDoc', expenseSchema)