const mongoose = require("mongoose");
const populateData = require("../populateData");
require("dotenv").config();
const db = process.env.DATABASE_URL;
mongoose.set("strictQuery", true, "useNewUrlParser", true);

const connectDB = async () => {
  try {
    await mongoose.connect(db);
    console.log("MongoDB is Connected...");
    await populateData();
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
