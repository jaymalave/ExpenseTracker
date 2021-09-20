const ExpenseDoc = require("../models/expenses");

// @desc    Get all transactions
// @route   GET /api/v1/transactions
// @access  Public
exports.getTransactions = async (req, res, next) => {
  // res.send("GET view all transactions");
  try {
    const expenses = await ExpenseDoc.find();
    return res.status(200).json({
      success: true,
      count: expenses.length,
      data: expenses,
    });
  } catch (err) {
    return res.send(500).json({
      success: false,
      error: "Server Error",
    });
  }
};

// @desc    Add a transaction
// @route   POST /api/v1/transactions
// @access  Public
exports.addTransaction = async (req, res, next) => {
  // res.send("POST add a transaction");
  try {
    const { name, cost } = req.body;
    const expense = new ExpenseDoc({
      name,
      cost,
    });
    await expense.save();
    console.log({ name, cost });
  } catch (err) {
    console.log(err);
  }
};

// @desc    Get all transactions
// @route   DELETE /api/v1/transactions/:id
// @access  Public
exports.deleteTransaction = async (req, res, next) => {
  // res.send("DELETE delete a transaction");
};
