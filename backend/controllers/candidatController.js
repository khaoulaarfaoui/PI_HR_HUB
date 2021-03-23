const candidate = require("../models/candidat.js");

module.exports = {
  create: function (req, res) {
    console.log("postHR");
    var newCandidate = new candidate(req.body);


    newCandidate.save(function (err, item) {
      if (err) {
        console.log("Error saving  candidate",err);
        res.json({status:"error", message: "candidate Not added!!!", data:null});

      } else {
        res.json({status:"success", message: "candidate added!!!", data:item});
      }
    });
  },
  update: function (req, res) {

    candidate.findByIdAndUpdate({_id:req.params.id},req.body,{new:true},function(err,item){
      if (err) {
        console.log("Error saving  candidate",err);
        res.json({status:"error", message: "candidate Not updated!!!", data:null});

      } else {
        res.json({status:"success", message: "candidate updated!!!", data:item});
      }

    })

  },
  delete: function (req, res) {

    candidate.findByIdAndDelete({_id:req.params.id},function(err,item){
      if (err) {
        console.log("Error saving  candidate",err);
        res.json({status:"error", message: "candidate Not deleted!!!", data:null});

      } else {
        res.json({status:"success", message: "candidate deleted!!!", data:item});
      }

    })

  },
  findAll: function (req, res) {
    console.log("Get request for all hr");
    candidate.find({}).exec(function (err, items) {
      if (err) {
        console.log("Error saving  candidate",err);
        res.json({status:"error", message: "candidates Not Found !!!", data:null});

      } else {
        res.json({status:"success", message: "candidates found !!!", data:items});
      }
    });
  },
};
