const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");
const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const connectToDB = require("./db/db");
const userRoutes = require("./routes/user.routes");
const captainRoutes = require("./routes/captain.route");
const mongoose = require("mongoose");

// Connect to the database
connectToDB();

mongoose
  .connect(process.env.DB_CONNECT, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use("/captains", captainRoutes);

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.use("/users", userRoutes);

module.exports = app;
