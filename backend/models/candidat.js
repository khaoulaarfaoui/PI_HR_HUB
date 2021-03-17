const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const candidateSchema = new Schema({
  fullName: String,
  username: String,
  password: String,
  profilePhoto: File,
  birthday: Date,
  email: String,
  phoneNumber: Number,
  location: String,
  education: String,
  experience: String,
  states: String,
  skills: String,
  SubmittedJobs: Array,
  ratio: Number,
  teamStatus: Boolean,
  cv: File,
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
      ref: "test",
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
