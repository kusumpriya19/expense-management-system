const express = require('express');
const { addTransaction, getAllTransaction,editTransaction,deleteTransaction } = require('../controllers/transactionCtrl');


//router object
const router = express.Router();

//routes
// add transaction POST method
router.post('/add-transaction', addTransaction);

// post transactions
router.post('/get-transaction', getAllTransaction);

// edit transaction POST method
router.post('/edit-transaction', editTransaction);

// delete transaction POST method
router.post('/delete-transaction', deleteTransaction);

module.exports = router;