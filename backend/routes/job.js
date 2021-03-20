const express = require("express");
const jobController=require("../controllers/jobController")
const router = express.Router();

router.post("/add_job/:id",jobController.create)
router.delete("/:id",jobController.delete)
router.put("/:id",jobController.update)
router.get("/",jobController.findAll)

module.exports = router;
