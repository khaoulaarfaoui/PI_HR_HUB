const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const Jobs = require("../models/jobs");
const hr = require("../models/hr");

const candidate = require("../models/candidat");
const ContentBasedRecommender = require("content-based-recommender");

var normalize = require("json-api-normalize");
const { json } = require("body-parser");
const { isEqual, include, indexOf } = require("underscore");
const { ObjectId } = require("bson");

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

router.get("/job/:id", function (req, res) {
  console.log("Get request single job");
  Jobs.findById(req.params.id).exec(function (err, job) {
    if (err) {
      console.log("error job");
    } else {
      res.json(job);
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
  let idUser = user.id;
  const all = await Jobs.find({});
  console.log(all.length);

  var _id = all.length + 1;
  const { title, description, salary, requirement } = req.body;
  const job = await Jobs.create({
    _id,
    title,
    description,
    salary,
    requirement,
  });
  await job.save();

  const userById = await hr.findById(idUser);

  userById.jobs.push(job);
  await userById.save();

  return res.send(userById);
});

router.post("/submit/:id/:ide", async (req, res) => {
  console.log(req.params);
  let user = req.params;
  let id = user.id;
  let ide = user.ide;

  const job = await Jobs.findById(ide);
  const cand = await candidate.findById(id);
  cand.SubmittedJobs.push(job);

  await cand.save();

  console.log(id);
  console.log(ide);
  res.send(cand);
  console.log("submitted job add");
});

router.get("/recjob/:id", async (req, res) => {
  let user = req.params;
  let id = user.id;
  const job = await Jobs.find({}, { _id: 1, requirement: 1 });
  var test = [];
  const cand = await candidate.findById(id);
  const skill = cand.skills;
  var arr = skill.map(function (obj) {
    return obj.value;
  });
  console.log("arr", arr);

  for (let i in job) {
    console.log("table", job[i].requirement);

    if (arr.includes(job[i].requirement)) {
      console.log("recom");

      var jobbyid = await Jobs.findById(job[i]._id);
      console.log(jobbyid);
      test.push(jobbyid);
    } else {
      console.log("lee");
    }
  }
  console.log(test);
  res.send(test);

  console.log("Get request recommended job");
});

router.get("/submittedJobs/:id", function (req, res) {
  console.log("Get request  Applied jobs ");

  console.log(req.params);
  let user = req.params;
  let id = user.id;
  candidate
    .findById(id)
    .select("SubmittedJobs")

    .exec(function (err, jobs) {
      if (err) {
        console.log("error Submitted jobs");
      } else {
        res.json(jobs);
      }
    });
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
