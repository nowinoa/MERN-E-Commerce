const express = require("express");
const dotenv = require("dotenv");
const products = require("./data/products");

const app = express();
dotenv.config();

app.get("/", (req, res) => {
  res.send("api runnniiiiing");
});

app.get("/api/products", (req, res) => {
  res.json(products);
});
app.get("/api/products/:id", (req, res) => {
  const product = products.find((p) => p._id === req.params.id);
  res.json(product);
});

const PORT = process.env.PORT;

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} on port ${PORT}`)
);
