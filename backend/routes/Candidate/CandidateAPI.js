const express = require("express");
const router = express.Router();
const Candidate = require("../../models/candidat");
const User = require("../../models/user");
const uuid = require("uuid").v4;

const path = require("path");

const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, `${__dirname}/CandidateUploads`);
  },
  filename: (req, file, callback) => {
    callback(null, file.originalname);
  },
});
const upload = multer({ storage: storage });

router.post(
  "/addCandidate",
  upload.fields([
    { name: "profilePhoto", maxCount: 1 },
    { name: "cv", maxCount: 1 },
  ]),
  async (req, res) => {
    try {
      const candidate = new Candidate({
        user: req.body.user,
        fullName: req.body.fullName,
        profilePhoto: JSON.parse(JSON.stringify(req.files.profilePhoto[0]))[
          "path"
        ],
        birthday: req.body.birthday,
        phoneNumber: req.body.phoneNumber,
        education: req.body.education,
        experience: req.body.experience,
        states: req.body.states,
        skills: req.body.skills,
        SubmittedJobs: req.body.SubmittedJobs,
        ratio: req.body.ratio,
        teamStatus: req.body.teamStatus,
        cv: JSON.parse(JSON.stringify(req.files.cv[0]))["path"],
        title: req.body.title,
        jobs: req.body.jobs,
        events: req.body.events,
        tests: req.body.tests,
        teams: req.body.teams,
      });
      await candidate.save();
      const user = await User.findById({ _id: candidate.user });
      const email = user.email;
      res.status(200).json({ success: true, data: candidate, email: email });
    } catch (err) {
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
