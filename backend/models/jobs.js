const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const jobSchema = new Schema({
  title: String,
  description: String,
  salary: Number,
  requirement: String,
  //Candidate: [{ type: mongoose.Schema.ObjectId, ref: "Candidate" }],

  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Job", jobSchema, "Jobs");
