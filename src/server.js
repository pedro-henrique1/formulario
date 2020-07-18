const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/", (req, res) => {
  return res.sendFile(__dirname + "/views/index.html");
});

app.listen(port);
