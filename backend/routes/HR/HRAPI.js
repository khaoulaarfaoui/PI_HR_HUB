const express = require("express");
const candidat = require("../../models/candidat");
const hr = require("../../models/hr");
const router = express.Router();
const HR = require("../../models/hr");
const User = require("../../models/user");

router.post("/addHR", async (req, res) => {
  try {
    const hr = new HR(req.body);
    await hr.save();
    const user = await User.findById({ _id: hr.user });

    //return new book object, after saving it to Publisher
    res.status(200).json({ success: true, data: hr });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
});

module.exports = router;
