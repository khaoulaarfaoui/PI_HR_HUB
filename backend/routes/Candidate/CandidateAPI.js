const express = require("express");
const router = express.Router();
const Candidate = require("../../models/candidat");
const User = require("../../models/user");

router.post("/addCandidate", async (req, res) => {
  try {
    const candidate = new Candidate(req.body);
    await candidate.save();
    const user = await User.findById({ _id: candidate.user });
    res.status(200).json({ success: true, data: candidate });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
});

module.exports = router;
