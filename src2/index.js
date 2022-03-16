import express from "express";
import Items from "../src2/handler.js";
import fs from "fs";
let items = new Items("prods.json");
let url = "prods.json";

const app = express();
const PORT = 8080;

let counterFiles = 0;
let counterRandom = 0;

const server = app.listen(PORT, (req, res) => {
  console.log(`Listen from  http://localhost:${PORT}`);
});

app.get("/", (req, res) => {
  res.send("<h1>Entrega n°7</h1>");
});
app.get("/files", async (req, res) => {
  counterFiles++;
  res.send(items.showItems());
});
