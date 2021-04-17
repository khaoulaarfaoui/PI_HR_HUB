const { stringify } = require("querystring");

const express = require("express"),
  router = express.Router(),
  parseIt = require("../utils/parseIt"),
  multer = require("multer"),
  upload = multer({
    storage: multer.diskStorage({
      destination: function (req, file, cb) {
        cb(null, "cv/uploads/");
      },
      filename: function (req, file, cb) {
        cb(null, file.originalname);
      },
    }),
  });

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.post("/post", upload.single("upl"), function (req, res, next) {
  console.log("success");
  console.log(req.file.path);
  parseIt.parseResume(req.file.path, "cv/compiled");
  res.status(204).end();
});

module.exports = router;
