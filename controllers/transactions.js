// @desc    Get all transactions
// @route   GET /api/v1/transactions
// @access  Public
exports.getTransactions = (req, res, next) => {
  res.send("GET view all transactions");
};

// @desc    Add a transaction
// @route   POST /api/v1/transactions
// @access  Public
exports.addTransaction = (req, res, next) => {
  res.send("POST add a transaction");
};

// @desc    Get all transactions
// @route   DELETE /api/v1/transactions/:id
// @access  Public
exports.deleteTransaction = (req, res, next) => {
  res.send("DELETE delete a transaction");
};
