const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const Job = require("./job");
const app = express();
const port = process.env.PORT || 8082;

app.use(express.json());

const uri =
  "mongodb+srv://findadatabase:H6equKdFGKeeNz@cluster0.e8fmd.mongodb.net/finda?retryWrites=true&w=majority";

mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("connection successfull");
  })
  .catch((err) => {
    console.log(err);
  });

app.use(
  cors({
    origin: "*",
  })
);

app.get("/", (req, res) => {
  res.send("Welcome To Finda Backend");
});

app.post("/jobs", (req, res) => {
  console.log("New Job Added");
  console.log(req.body);
  const newJob = new Job(req.body);
  newJob
    .save()
    .then(() => {
      res.status(201).send(newJob);
    })
    .catch((e) => {
      res.status(400).send(e);
    });
});

app.get("/jobs", async (req, res) => {
  try {
    const jobData = await Job.find();
    res.send(jobData);
  } catch (error) {
    res.status(404).send(error);
  }
});

app.listen(port, () => {
  console.log(`Backend Started at http://localhost:${port}`);
});
