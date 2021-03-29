const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const candidateSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    index: true,
  },
  fullName: String,
  profilePhoto: String,
  birthday: Date,
  phoneNumber: Number,
  location: String,
  education: String,
  experience: String,
  states: String,
  skills: [{}],
  SubmittedJobs: Array,
  ratio: Number,
  teamStatus: Boolean,
  cv: String,
  title: String,
  jobs: [
    {
      type: Schema.Types.ObjectId,
      ref: "job",
    },
  ],
  events: [
    {
      type: Schema.Types.ObjectId,
      ref: "event",
    },
  ],

  tests: [
    {
      type: Schema.Types.ObjectId,
      ref: "candidateTest",
    },
  ],
  teams: [
    {
      type: Schema.Types.ObjectId,
      ref: "teams",
    },
  ],
});

module.exports = mongoose.model("Candidate", candidateSchema, "Candidate");
