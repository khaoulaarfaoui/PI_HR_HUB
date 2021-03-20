const express = require("express");
const candidatController=require("../controllers/candidatController")
const router = express.Router();
router.post("/add_job/:id",candidatController.create)
router.delete("/:id",candidatController.delete)
router.put("/:id",candidatController.update)
router.get("/",candidatController.findAll)
module.exports = router;
