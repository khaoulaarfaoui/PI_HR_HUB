const express = require("express");
const teamController=require("../controllers/teamsController")
const router = express.Router();

router.post("/addTeams",teamController.create)
router.delete("/:id",teamController.delete)
router.put("/:id",teamController.update)
router.get("/allTeams",teamController.findAll)

module.exports = router;
