const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const hrSchema = new Schema({
  company: String,
  companyLogo: File,
  companyPhotos: File,
});

module.exports = mongoose.model("HR", hrSchema, "hr");
