const mongoose = require('mongoose')

const expenseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  cost: {
    type: Number,
    required: true,
    default: 0
  }
})

module.exports = mongoose.model('ExpenseDoc', expenseSchema)