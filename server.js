var express = require("express");
const ExpenseDoc = require("./models/expenses");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv/config");
var app = express();
const PORT_NO = 8000 || process.env.PORT;

const bodyParser = require("body-parser");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

mongoose.connect(
  process.env.DB_CON,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log("database connected");
  }
);

const transactions = require("./routes/transactions");

app.use('/api/v1/transactions/', transactions);

app.get("/", async (req, res) => {
  const allData = await ExpenseDoc.find();
  res.json({ message: "blank route GET request working" });
});

app.post("/addexpense", async (req, res) => {
  const { name, cost } = req.body;
  const expense = new ExpenseDoc({
    name,
    cost,
  });
  await expense.save();
  // console.log(savedExpense)
  console.log({ name, cost });
});

app.listen(PORT_NO, () => {
  console.log("Server is up and running");
});
