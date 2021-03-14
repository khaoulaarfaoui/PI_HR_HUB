const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const customisedTestSchema = new Schema({
  title: String,
  description: String,
  type: String,
  tags: Array,
  result: Number,
  companyName: String,
  color: String,
  startDate: Date,
  endDate: Date,
  category: String,
  //Candidate: [{ type: mongoose.Schema.ObjectId, ref: "Candidate" }],
});

module.exports = mongoose.model(
  "customisedTest",
  customisedTestSchema,
  "customisedTests"
);
