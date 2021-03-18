const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const UserSchema = require("./user").CustomerSchema;

const candidateSchema = new Schema({
  user: UserSchema,
  fullName: String,
  profilePhoto: File,
  birthday: Date,
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
