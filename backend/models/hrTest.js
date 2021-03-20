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
  hr: {
    type: Schema.Types.ObjectId,
    ref: "HR",
  },
});

module.exports = mongoose.model("hrTest", hrTestSchema, "hrTest");
