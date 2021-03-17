const hr = require("../models/hr.js");

module.exports = {
  create: function (req, res) {
    console.log("postHR");
    var newHR = new hr();

    newHR.fullName = req.body.fullName;
    newHR.username = req.body.username;

    newHR.save(function (err, insertedHR) {
      if (err) {
        console.log("Error saving  hr");
      } else {
        res.json(insertedHR);
        console.log(insertedHR);
      }
    });
  },
  update: function (req, res) {},
  delete: function (req, res) {},
  findAll: function (req, res) {
    console.log("Get request for all hr");
    hr.find({}).exec(function (err, hr) {
      if (err) {
        console.log("error jobs");
      } else {
        res.json(hr);
      }
    });
  },
};
