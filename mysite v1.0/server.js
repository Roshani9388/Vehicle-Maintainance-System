const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(express.static(__dirname));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.use(bodyParser.urlencoded({ extended: true }))

app.listen(3000, () => {
    console.log("Listen on the port 3000...");
});