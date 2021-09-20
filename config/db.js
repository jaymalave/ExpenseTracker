const mongoose = require("mongoose");
require("dotenv/config");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      process.env.DB_CON,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
      () => {
        console.log(`database connected: ${conn.connection.host}`);
      }
    );
  } catch (err) {
    console.log(err);
  }
};

module.exports = connectDB;
