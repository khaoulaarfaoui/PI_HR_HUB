const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const jobSchema = new Schema({
  _id: Number,
  title: String,
  description: String,
  salary: Number,
  requirement: String,
  content: String,
  //Candidate: [{ type: mongoose.Schema.ObjectId, ref: "Candidate" }],

  date: {
    type: Date,
    default: Date.now,
  },

  hr: {
    type: Schema.Types.ObjectId,
    ref: "HR",
  },
  candidate: {
    type: Schema.Types.ObjectId,
    ref: "Candidate",
  },
});

module.exports = mongoose.model("job", jobSchema, "job");
