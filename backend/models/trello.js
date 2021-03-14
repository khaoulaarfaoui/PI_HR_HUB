const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const trelloSchema = new Schema({
  todo: Array,
  doing: Array,
  done: Array,
});
module.exports = mongoose.model("trello", trelloSchema, "trello");
