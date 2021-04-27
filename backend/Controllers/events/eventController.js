const eventsmodel = require("../../models/events.js");
const Team = require ("../../models/teams");
const express = require("express");
const router = express.Router();

//Add Event
router.post("/addEvents", async (req, res) => {
try {

  const ev = new eventsmodel({
      eventName: req.body.eventName, 
      eventDate: req.body.eventDate, 
      description: req.body.description,
      file: req.body.file,
      //teams: req.body.teams,
  });

      ev.save();
      res.json(ev);
      const t = await Team.findById({ _id: ev.teams });
      console.log(t);

      
      console.log("Event ++");
  }catch(err){
      console.log("Error to add event");
  }

});

//View All Events
router.get("/allEvents", function (req,res) {
  console.log("Get all events");
  eventsmodel.find({}).exec(function (err, ev) {
    if (err) {
      console.log("Error View All Events ");
    } else {
      res.json(ev);
    }
  });
});

//Update Event
router.put("/updateEvent/:id", function (req, res) {
    console.log("update Event");
    eventsmodel.findByIdAndUpdate(req.params.id,
      {
        $set: {
          eventName: req.body.eventName,
          eventDate: req.body.eventDate,
          description: req.body.description,
          file: req.body.file,
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
          console.log("Event updated ++");
        }
      }
    );
  });


//Delete Event
  router.delete("/deleteEvent/:id", function (req, res) {

    console.log("Event deleted -- ");
    eventsmodel.findOneAndDelete(req.params.id, function (err, deleted) {
      if (err) {
        res.send("error deleting");
      } else {
        res.json(deleted);
      }
    });

  });


module.exports = router;

