const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const db =
  "mongodb+srv://HR_HUB:root2021@cluster0.1ymld.mongodb.net/HRHUB?retryWrites=true&w=majority";
const Jobs = require("../models/jobs");

mongoose.connect(db, (err) => {
  if (err) {
    console.error("Error!" + err);
  } else {
    console.log("Connected to mongodb");
  }
});

router.get("/", (req, res) => {
  res.send("From api route");
});

router.post("/add_job", function (req, res) {
  console.log("post a job");
  var newJob = new Jobs();

  newJob.title = req.body.title;
  newJob.description = req.body.description;

  newJob.salary = req.body.salary;

  newJob.requirement = req.body.requirement;

  newJob.save(function (err, insertedJob) {
    if (err) {
      console.log("Error saving  job");
    } else {
      res.json(insertedJob);
      console.log(insertedJob);
    }
  });
});

router.get("/jobs", function (req, res) {
  console.log("Get request for all jobs");
  Jobs.find({}).exec(function (err, jobs) {
    if (err) {
      console.log("error jobs");
    } else {
      res.json(jobs);
    }
  });
});

module.exports = router;
