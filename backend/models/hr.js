const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const UserSchema = require("./user");

const hrSchema = new Schema({
  //user: UserSchema,
  fullName: String,
  profilePhoto: String,
  birthday: Date,
  phoneNumber: Number,
  location: String,
  company: String,
  companyLogo: String,
  companyPhotos: String,

  jobs: [
    {
      type: Schema.Types.ObjectId,
      ref: "job",
    },
  ],
  events: [
    {
      type: Schema.Types.ObjectId,
      ref: "event",
    },
  ],

  tests: [
    {
      type: Schema.Types.ObjectId,
      ref: "hrTest",
    },
  ],

  notes: [
    {
      type: Schema.Types.ObjectId,
      ref: "note",
    },
  ],

  teams: [
    {
      type: Schema.Types.ObjectId,
      ref: "teams",
    },
  ],
});

module.exports = mongoose.model("HR", hrSchema, "HR");
