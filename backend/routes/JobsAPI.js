const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const Jobs = require("../models/jobs");
const hr = require("../models/hr");
var normalize = require("json-api-normalize");
const { json } = require("body-parser");

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

router.post("/add_HR", function (req, res) {
  console.log("postHR");
  var newHR = new hr();

  newHR.fullName = req.body.fullName;
  console.log(newHR.fullName);

  newHR.save(function (err, insertedHR) {
    if (err) {
      console.log("Error saving  hr");
    } else {
      res.json(insertedHR);
      console.log(insertedHR);
    }
  });
});

router.get("/hr", function (req, res) {
  console.log("Get request for all hr");
  hr.find({}).exec(function (err, hr) {
    if (err) {
      console.log("error jobs");
    } else {
      res.json(hr);
    }
  });
});

router.get("/jobs/:id", function (req, res) {
  console.log("Get request  jobs by hr");
  hr.findById(req.params.id)
    .populate({
      path: "jobs",
    })
    .select("jobs -_id")

    .exec(function (err, jobs) {
      if (err) {
        console.log("error jobs");
      } else {
        res.json(jobs);
      }
    });
});

router.post("/add/:id", async (req, res) => {
  console.log(req.params);
  let user = req.params;
  let id = user.id;
  const { title, description, salary, requirement } = req.body;
  const job = await Jobs.create({
    title,
    description,
    salary,
    requirement,
  });
  await job.save();

  const userById = await hr.findById(id);

  userById.jobs.push(job);
  await userById.save();

  return res.send(userById);
});

router.put("/job/:id", function (req, res) {
  console.log("update a job");
  Jobs.findByIdAndUpdate(
    req.params.id,
    {
      $set: {
        title: req.body.title,
        description: req.body.description,
        salary: req.body.salary,
        requirement: req.body.requirement,
      },
    },

    {
      new: true,
    },
    function (err, updatedJob) {
      if (err) {
        res.send("Error updating Job");
      } else {
        res.json(updatedJob);
        console.log("update success");
      }
    }
  );
});

router.delete("/deleteJob/:id", function (req, res) {
  console.log("deleteing a job ");
  Jobs.findOneAndDelete(req.params.id, function (err, deleteJob) {
    if (err) {
      res.send("error deleting Job");
    } else {
      res.json(deleteJob);
    }
  });
});

router.post("/post", function (req, res) {
  // router.post('/post',function(req,res){

  console.log("post a post");
  var newPost = new Jobs();

  newPost.title = req.body.title;

  // newPost.date = req.body.Date.now();

  newPost.save(function (err, insertedPost) {
    if (err) {
      console.log("Error saving  post");
    } else {
      res.json(insertedPost);
      console.log(insertedPost);
    }
  });
});

module.exports = router;
