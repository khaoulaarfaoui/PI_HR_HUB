const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const notesSchema = new Schema({
  Todo: Array,
  Doing: Array,
  Done: Array,
});

module.exports = mongoose.model("note", notesSchema, "note");
