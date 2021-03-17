const Jobs = require("../models/jobs.js");

module.exports = {
  create: function (req, res) {

    
  },
  update: function (req, res) {},
  delete: function (req, res) {},
  
  findAll: function (req, res) {
    console.log("Get request for all jobs");
  Jobs.find({}).exec(function (err, jobs) {
    if (err) {
      console.log("error jobs");
    } else {
      res.json(jobs);
    }
  });
  },
};
