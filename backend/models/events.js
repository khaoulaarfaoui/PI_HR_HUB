const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const eventsSchema = new Schema({
  eventName: String,
  eventDate: Date,
  description: String,
  hr: {
    type: Schema.Types.ObjectId,
    ref: "HR",
  },
  candidate: {
    type: Schema.Types.ObjectId,
    ref: "Candidate",
  },
});
module.exports = mongoose.model("event", eventsSchema, "event");
