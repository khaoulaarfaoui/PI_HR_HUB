const hr = require("../models/hr.js");

module.exports = {
  create: function (req, res) {
    console.log("postHR");
    var newHR = new hr(req.body);


    newHR.save(function (err, item) {
      if (err) {
        console.log("Error saving  hr",err);
        res.json({status:"error", message: "hr added!!!", data:null});

      } else {
        res.json({status:"success", message: "hr added!!!", data:item});
      }
    });
  },
  update: function (req, res) {

      hr.findByIdAndUpdate({_id:req.params.id},req.body,{new:true},function(err,item){
        if (err) {
          console.log("Error saving  hr",err);
          res.json({status:"error", message: "hr updated!!!", data:null});
  
        } else {
          res.json({status:"success", message: "hr updated!!!", data:item});
        }
         
      })

  },
  delete: function (req, res) {

    hr.findByIdAndDelete({_id:req.params.id},function(err,item){
      if (err) {
        console.log("Error saving  hr",err);
        res.json({status:"error", message: "hr deleted!!!", data:null});

      } else {
        res.json({status:"success", message: "hr deleted!!!", data:item});
      }
       
    })

  },
  findAll: function (req, res) {
    console.log("Get request for all hr");
    hr.find({}).exec(function (err, items) {
      if (err) {
        console.log("Error saving  hr",err);
        res.json({status:"error", message: "hr all!!!", data:null});

      } else {
        res.json({status:"success", message: "hr found!!!", data:items});
      }
    });
  },
};
