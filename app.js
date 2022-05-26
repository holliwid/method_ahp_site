

const ahp = require('./ahp.js');


const express = require("express");
const app = express();

app.listen(3000, () => {
  console.log("Application started and Listening on port 3000");
});

app.use(express.static(__dirname))
app.use(
    express.urlencoded({
      extended: true,
    })
  );
app.use(express.json());



app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});


app.post("/result", (req, res) => {
    ahp.calculate(req.body)
  });

  
app.get("/result", (req, res) => {
    res.sendFile(__dirname + "/result.html");
});