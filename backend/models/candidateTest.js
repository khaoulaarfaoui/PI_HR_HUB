const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const candidateTestSchema = new Schema({
  title: String,
  description: String,
  type: String,
  tags: Array,
  result: Number,
  startDate: Date,
  endDate: Date,

  //Candidate: [{ type: mongoose.Schema.ObjectId, ref: "Candidate" }],
});

module.exports = mongoose.model(
  "candidateTest",
  candidateTestSchema,
  "candidateTest"
);
