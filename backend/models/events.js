const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const eventsSchema = new Schema({
  eventName: String,
  eventDate: Date,
  description: String,
});
module.exports = mongoose.model("event", eventsSchema, "events");
