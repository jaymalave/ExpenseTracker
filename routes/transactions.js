const express = require('express')
const router = express.Router();
const {getTransactions, addTransaction, deleteTransaction} = require('../controllers/transactions')

router.route('/').get(getTransactions);
router.route('/add').post(addTransaction);
router.route('/delete/:id').delete(deleteTransaction);


module.exports = router;