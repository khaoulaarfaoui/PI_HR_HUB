const eventsmodel = require("../models/events.js");
const express = require("express");
const router = express.Router();


router.post("/addEvents", function (req, res) {
  
  const newEv = new eventsmodel({
    eventName: req.body.eventName,
    eventDate: req.body.eventDate,
    description: req.body.description,
  });

  newEv.save(function (err, ev) {
    if (err) {
      console.log("Error");
    } else {
      res.json(ev);
      console.log(ev);
    }
  });
});

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

  findAll: function (req, res) {
    console.log("Get All Events");
    eventsmodel.find({}).exec(function (err, items) {
      if (err) {
        console.log("Error",err);
        res.json({status:"error", message: "Nop", data:null});
      } else {
        res.json({status:"success", message: "All <3", data:items});
      }
    });
  }

*/

