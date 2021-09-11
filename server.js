var express = require('express')
const ExpenseDoc = require('./models/expenses')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv/config')
var app = express()
const PORT_NO = 8000 || process.env.PORT

const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

// app.use(cors())

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
    const {name, cost} = req.body
    const expense = new ExpenseDoc(
        {
            name,
            cost
        }
    )
    await expense.save()
    // console.log(savedExpense)
    console.log({name, cost})
})

app.listen(PORT_NO, () => {
    console.log("Server is up and running");
})