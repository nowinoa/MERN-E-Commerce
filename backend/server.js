import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import connectDB from "./config/db.js";
import productRoutes from  './routes/productRoutes.js';

const app = express();
dotenv.config();
connectDB();

app.get("/", (req, res) => {
  res.send("api runnniiiiing");
});

app.use('/api/products', productRoutes)

const PORT = process.env.PORT;

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} on port ${PORT}`.yellow.underline
  )
);
