const eventsmodel = require("../../models/events.js");
const express = require("express");
const router = express.Router();

//Add Event
router.post("/addEvents", async (req, res) => {
  
  const eventName = req.body.eventName;
  const eventDate = req.body.eventDate;
  const description = req.body.description;

  const ev = new eventsmodel({
      eventName: eventName, 
      eventDate: eventDate, 
      description: description
  });

  try {
      await ev.save();
      res.json(ev);
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
router.put("updateEvent/:id", async (req, res) => {
  const {id: _id} = req.params;
  const event = req.body;
  const err = req.error;
  const updateEvent = await eventsmodel.findByIdAndUpdate(_id, event, { new: true});
  //eventsmodel.findByIdAndUpdate({_id:req.params.id},req.body,{new:true},function(err,item){
    if (err) {
      console.log("Nop",err);
      res.json({status:"error", message: "Nop for update", data:null});
    } else {
      res.json(updateEvent)
      res.json({status:"success", message: "Event Updated <3"});
    }
     
  })


module.exports = router;

/*
exports.create = (req, res) => {
    
    //var newEv = new eventsmodel(req.body);
    const newEv = new eventsmodel({
      eventName: req.body.eventName,
      eventDate: req.body.eventDate,
      description: req.body.description,
    });

    newEv.save(function (err, newEv) {
      if (err) {
        console.log("Error Add ",err);
        res.json({status:"error", message: "Zab", data:null});
      } else {
        res.json({status:"success", message: "+ GOAL +", data:newEv});
      }
    });
  }



  update: function (req, res) {
    eventsmodel.findByIdAndUpdate({_id:req.params.id},req.body,{new:true},function(err,item){
      if (err) {
        console.log("Nop",err);
        res.json({status:"error", message: "Nop", data:null});
      } else {
        res.json({status:"success", message: "Updated <3", data:item});
      }
       
    })
  },

  delete: function (req, res) {
    eventsmodel.findByIdAndDelete({_id:req.params.id},function(err,item){
      if (err) {
        console.log("Error",err);
        res.json({status:"error", message: "Nop for Delete", data:null});
      } else {
        res.json({status:"success", message: "Bye <3", data:item});
      }
      
    })
  },



*/

