// this is our server file

// let's bring in express to create an API

const express = require("express");
const app = express();
const cors = require("cors");

const PORT = 1234;

// import the local DB
const Datastore = require("nedb");
const db = new Datastore("database.db");
db.loadDatabase();

app.use(express.json());
app.use(cors());

app.get("/data", (req, res) => {
  //res.json("Dataaaaa");
  db.find({}, (err, data) => {
    res.json(data);
  });
});

app.post("/api", (req, res) => {
  const dataInsert = req.body;
  console.log(dataInsert);
  db.insert(dataInsert);
  res.json("Succes");
});

app.listen(PORT, console.log("Our app is running on port"));
