const express = require("express");
const router = express.Router();
const ResponseTest = require("../../models/ResponseTest");
var nodemailer = require('nodemailer');

router.post("/addResponseTest", async (req, res) => {
  try {
    const candidateResponse = new ResponseTest(req.body);
    const response = await candidateResponse.save();

    response.populate(
      {
        path: "hrTest",
        populate: {
          path: "hr",
        },
      },
      function (err, item) {
        console.log("responseeee ", response.hrTest.hr.email);

        var transporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
            user: "amir.yazidi1@esprit.tn",
            pass: "esprit2021@@@",
          },
        });
        var url="http://localhost:8082/file/"
        var mailOptions = {
          from: "amir.yazidi1@esprit.tn",
          to: response.hrTest.hr.email,
          subject: "Sending Email using Node.js",
          html: `<h1>here is my answer of the test</h1><a href=http://localhost:8082/file/${response.response}>Download!</a>`
        
        };

        transporter.sendMail(mailOptions, function (error, info) {
          if (error) {
            console.log(error);
          } else {
            console.log("Email sent: " + info.response);
          }
        });
      }
    );

    //return new book object, after saving it to Publisher
    res.status(200).json({ success: true, data: candidateResponse });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
});

router.put("/updateCandateTest", async (req, res) => {
  console.log(req.body);
  try {
    const tt = await ResponseTest.findByIdAndUpdate(
      { _id: req.body._id },
      req.body,
      { new: true }
    );

    //return new book object, after saving it to Publisher
    res.status(200).json({ success: true, data: tt });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
});
router.get("/", async (req, res) => {
  try {
    const hrs = await ResponseTest.find().populate({
      path: "hrTest",
      populate: {
        path: "hr",
      },
    });

    //return new book object, after saving it to Publisher
    res.status(200).json({ success: true, data: hrs });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
});

router.delete("/deleteQuestion/:id/", function (req, res) {
  ResponseTest.findByIdAndUpdate({ _id: req.params.id }, function (err, item) {
    res.status(200).json({ success: true, message: err, data: item });
  });
});

module.exports = router;
