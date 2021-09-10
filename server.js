var express = require('express')
const ExpenseDoc = require('./models/expenses')
const mongoose = require('mongoose')
require('dotenv/config')
var app = express()
const PORT = 8000

const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: true}))


mongoose.connect(
    process.env.DB_CON,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    () => {
        console.log('database connected')
    }
  );

app.get('/', (req, res) => {
   res.send("Backend working")
})

app.post('/addexpense', async (req, res) => {
    const expense = new ExpenseDoc(
        {
            name: req.body.name, 
            cost: req.body.cost
        }
    )
    const savedExpense = await expense.save()
    console.log(savedExpense)
    res.end()
})

app.listen(PORT, () => {
    console.log("Server is up and running");
})