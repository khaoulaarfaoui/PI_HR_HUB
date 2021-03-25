
const express = require("express");
const router = express.Router();
const candidate = require("../models/candidat");

router.post("/add", function (req, res) {
    console.log("add candidate");
    var newCandidate = new candidate();

    newCandidate.fullName = req.body.fullName;
    newCandidate.location = req.body.location;
    newCandidate.profilePhoto = req.body.profilePhoto;
    newCandidate.birthday = req.body.birthday;
    newCandidate.education = req.body.education;
    newCandidate.experience = req.body.experience;
    newCandidate.skills = req.body.skills;
    newCandidate.SubmittedJobs = req.body.SubmittedJobs;
    newCandidate.ratio = req.body.ratio;
    newCandidate.teamStatus = req.body.teamStatus;
    newCandidate.cv = req.body.cv;
    newCandidate.title = req.body.title;
    newCandidate.save(function (err, insertedCandidate) {
        if (err) {
            console.log("Error saving  candidate");
        } else {
            res.json(insertedCandidate);
            console.log(insertedCandidate);
        }
    });
});
router.put("/UpdateCandidate/:id", function (req, res) {
    console.log("update a Candidate");
    candidate.findByIdAndUpdate(
        req.params.id,
        {
            $set: {
                fullName: req.body.fullName,
                location: req.body.location,
                profilePhoto: req.body.profilePhoto,
                birthday: req.body.birthday,
                education: req.body.education,
                experience: req.body.experience,
                skills: req.body.skills,
                SubmittedJobs: req.body.SubmittedJobs,
                ratio: req.body.ratio,
                teamStatus: req.body.teamStatus,
                cv: req.body.cv,
                title: req.body.cv,
            },
        },

        {
            new: true,
        },
        function (err, updatedJob) {
            if (err) {
                res.send("Error updating Candidate");
            } else {
                res.json(updatedJob);
                console.log("update success");
            }
        }
    );
});
router.get("/ShowCandidates", function (req, res) {
    console.log("Get request for all Candidates");
    candidate.find({}).exec(function (err, Candidates) {
        if (err) {
            console.log("error Candidates");
        } else {
            res.json(Candidates);
        }
    });
});

router.delete("/deleteCandidate/:id", function (req, res) {
    console.log("deleting a Candidate ");
    candidate.findOneAndDelete(req.params.id, function (err, deleteCandidate) {
        if (err) {
            res.send("error deleting Candidate");
        } else {
            res.json(deleteCandidate);
        }
    });
});

router.get("/Candidate/:id", function (req, res) {
    console.log("Get request  Candidate");
    candidate.findById(req.params.id)
        .populate("Candidate")
        .exec(function (err, Candidate) {
            if (err) {
                console.log("error Candidate");
            } else {
                res.json(Candidate);
            }
        });
});







module.exports=router;