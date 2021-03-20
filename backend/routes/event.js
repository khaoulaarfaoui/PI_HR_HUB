const express = require("express");
const eventController=require("../controllers/eventController")
const router = express.Router();

router.post("/add_job/:id",eventController.create)
router.delete("/:id",eventController.delete)
router.put("/:id",eventController.update)
router.get("/",eventController.findAll)

module.exports = router;
