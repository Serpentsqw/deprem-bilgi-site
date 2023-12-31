const express = require("express");
const ejs = require("ejs")
const fs = require("fs")
const app = express();
const port = 3000;

app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(port);
console.log("Uygulama 3000 portunda dinleniyor")
