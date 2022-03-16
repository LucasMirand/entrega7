import express from "express";
// import Items from "../src/handler.js";
import fs from "fs";
// let items = new Items("prods.json");
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
  let response = await fs.promises.readFile(url, "utf-8");
  let conv = JSON.parse(response);
  counterFiles++;
  res.send([{ Productos: conv }, { Cantidad: conv.length }]);
});
app.get("/files-random", async (req, res) => {
  try {
    let array = await fs.promises.readFile(url, "utf-8");
    let conv = JSON.parse(array);
    let size = conv.length + 1;
    let randomNum = Math.floor(Math.random() * size + 1);
    counterRandom++;
    res.send(conv[randomNum]);
  } catch (error) {
    console.log("erro:" + error);
  }
});

app.get("/visitas", (req, res) => {
  try {
    console.log(counterFiles);
    console.log(counterRandom);
    res.send([{ FilesViews: counterFiles }, { RandomViews: counterRandom }]);
  } catch (error) {
    console.log("Error" + error);
  }
});
