const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const teamsSchema = new Schema({
  teamName: String,
  description: String,
  participantNumber: Number,
});
module.exports = mongoose.model("teams", teamsSchema, "teams");
