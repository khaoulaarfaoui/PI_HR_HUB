const teamsmodel = require("../../models/teams.js");
const express = require("express");
const router = express.Router();

//Add team
router.post("/addTeams", async (req, res) => {
  
  const teamName = req.body.teamName;
  const participantNumber = req.body.participantNumber;
  const description = req.body.description;

  const t = new teamsmodel({
      teamName: teamName, 
      participantNumber: participantNumber, 
      description: description
  });

  try {
      await t.save();
      res.json(t);
      console.log("Team ++");
  }catch(err){
      console.log("Error to add team");
  }

});

//View All teams
router.get("/allteams", function (req,res) {
  console.log("Get all Teams");
  teamsmodel.find({}).exec(function (err, t) {
    if (err) {
      console.log("Error View All teams ");
    } else {
      res.json(t);
    }
  });
});

//Update team
router.put("/updateTeam/:id", function (req, res) {
    
    teamsmodel.findByIdAndUpdate(req.params.id,
      {
        $set: {
          teamName: req.body.teamName,
          participantNumber: req.body.participantNumber,
          description: req.body.description
        },
      },
  
      {
        new: true,
      },
      function (err, updated) {
        if (err) {
          res.send("Error updating");
        } else {
          res.json(updated);
          console.log("Team updated ++");
        }
      }
    );
  });


//Delete team
  router.delete("/deleteTeam/:id", function (req, res) {

    console.log("Team deleted -- ");
    teamsmodel.findOneAndDelete(req.params.id, function (err, deleted) {
      if (err) {
        res.send("error deleting");
      } else {
        res.json(deleted);
      }
    });

  });


module.exports = router;

