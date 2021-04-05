const express = require("express");
var ObjectId = require("mongodb").ObjectID;

const router = express.Router();
const Candidate = require("../../models/candidat");
const User = require("../../models/user");
const uuid = require("uuid").v4;
const path = require("path");

const multer = require("multer");

/*const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(
      null,
      `/home/khaoula/Desktop/PI/backend/routes/Candidate/CandidateUploads`
    );
  },
  filename: (req, file, callback) => {
    callback(null, file.originalname);
  },
});
const upload = multer({ storage: storage });
*/

const DIR = "./public/";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, DIR);
  },
  filename: (req, file, cb) => {
    const fileName = file.originalname.toLowerCase().split(" ").join("-");
    cb(null, uuid() + "-" + fileName);
  },
});

var upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    if (
      file.mimetype === "image/png" ||
      file.mimetype === "image/jpg" ||
      file.mimetype === "image/jpeg"
    ) {
      cb(null, true);
    } else {
      cb(null, false);
      return cb(new Error("Only .png, .jpg and .jpeg format allowed!"));
    }
  },
});

router.post(
  "/addCandidate",
  upload.single("profilePhoto"),
  async (req, res, next) => {
    const url = req.protocol + "://" + req.get("host");

    try {
      const candidate = new Candidate({
        user: req.body.user,
        fullName: req.body.fullName,
        profilePhoto: url + "/public/" + req.file.filename,
        birthday: req.body.birthday,
        phoneNumber: req.body.phoneNumber,
        education: req.body.education,
        experience: req.body.experience,
        states: req.body.states,
        skills: req.body.skills,
        SubmittedJobs: req.body.SubmittedJobs,
        ratio: req.body.ratio,
        teamStatus: req.body.teamStatus,
        cv: req.body.cv,
        title: req.body.title,
        jobs: req.body.jobs,
        events: req.body.events,
        tests: req.body.tests,
        teams: req.body.teams,
      });
      candidate.save();

      const user = await User.findById({ _id: candidate.user });
      console.log(user);
      const email = user.email;
      console.log("reactttttt", req);
      res.status(200).json({ success: true, data: candidate, Email: email });
    } catch (err) {
      console.log("errrrrrrrrrr", err);
      console.log("reactttttt", req);

      res.status(400).json({ success: false, message: err.message });
    }
  }
);
router.get("/all", function (req, res) {
  Candidate.find(function (err, Candidate) {
    res.json(Candidate);
  });
});

router.get("/:id", function (req, res) {
  Candidate.findById(req.params.id, async (err, Candidate) => {
    if (!Candidate) {
      res.status(404).send("No result found");
    } else {
      const user = await User.findById({ _id: Candidate.user });
      const email = user.email;
      res.status(200).json({ Candidate: Candidate, Email: email });
    }
  });
});
module.exports = router;
