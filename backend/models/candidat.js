const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const candidateSchema = new Schema({
  education: String,
  experience: String,
  states: String,
  skills: String,
  SubmittedJobs: Array,
  ratio: Number,
  teamStatus: Boolean,
  cv: File,
  title: String,
  ElearningTest: [{ type: mongoose.Schema.ObjectId, ref: "ElearningTest" }],

  customisedTest: [{ type: mongoose.Schema.ObjectId, ref: "customisedTest" }],
  Job: [{ type: mongoose.Schema.ObjectId, ref: "Job" }],
});

module.exports = mongoose.model("Candidate", candidateSchema, "Candidate");
