const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const hrTestSchema = new Schema({
  title: String,
  description: String,
  type: String,
  tags: Array,
  result: Number,
  companyName: String,
  color: String,
  startDate: Date,
  endDate: Date,

  //Candidate: [{ type: mongoose.Schema.ObjectId, ref: "Candidate" }],
});

module.exports = mongoose.model("hrTest", hrTestSchema, "hrTest");
