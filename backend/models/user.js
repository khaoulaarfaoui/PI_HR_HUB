const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  fullName: String,
  username: String,
  password: String,
  profilePhoto: File,
  birthday: Date,
  email: String,
  phoneNumber: Number,
  location: String,
  role: String, //Enum
});

module.exports = mongoose.model("User", userSchema, "User");
