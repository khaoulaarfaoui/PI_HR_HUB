const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const router = express.Router();
const mongoose = require("mongoose");
const Role = require("../backend/models/Role");
const db = require("../backend/models");
const candidate = require("./routes/Candidate/CandidateAPI");
const hr = require("./routes/HR/HRAPI");
const response = require("./routes/Candidate/responseApi");

const dbConfig = require("./config/DBconfig");
const cv = require("./cv/app");
const multer = require("multer");
var path = require("path");
const job = require("./routes/JobsAPI");
var http = require("http");
var debug = require("debug")("server:server");
var connectIo = require("./chatbotService");
var socket = require("socket.io");
const eventsmodel = require("./Controllers/events/eventController");
var logger = require("morgan");
var dir = path.join(__dirname, "./public");
var cookieParser = require("cookie-parser");
var callback = require("./routes/callback");
const eventsmodel = require("./Controllers/events/eventController");
const app = express();
var corsOptions = {
  origin: "http://localhost:8081",
};
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors(corsOptions));
app.use("/job", job);
app.use("/cv", cv);
app.use("/events", eventsmodel);
app.use("/public", express.static(dir));

// set port, listen for requests
const PORT = process.env.PORT || 8082;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
require("../backend/routes/User/auth")(app);
require("../backend/routes/User/userRoute")(app);
require("./routes/User/auth")(app);
require("./routes/User/userRoute")(app);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use("/candidate", candidate);
app.use("/hr", hr);
app.use(express.static(path.join(__dirname, "../build")));
app.use("/callback", callback);
app.get("/linkedin", (req, res) => {
  res.sendFile(path.join(__dirname, "../build", "index.html"));
});
app.use("/response", response);
app.use("/hrTest", hrTest);
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error("Not Found");
  err.status = 404;
  next(err);
});
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};
  // render the error page
  res.status(err.status || 500);
  console.log(err);
  res.render("error");
db.mongoose
  .connect(`mongodb://${dbConfig.HOST}:${dbConfig.PORT}/${dbConfig.DB}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Successfully connect to MongoDB.");
    initial();
  })
  .catch((err) => {
    console.error("Connection error", err);
    process.exit();
  });
// SET STORAGE
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname)); //Appending extension
  },
});
var upload = multer({ storage: storage });
app.get("/", function (req, res) {
  res.send("Hello HR HUB");
});
app.post("/uploadfile", upload.single("file"), (req, res, next) => {
  const file = req.file;
  const error = new Error("Please upload a file");
  if (!file) {
    error.httpStatusCode = 400;
    return next(error);
  }
  res.send(file);
});
function initial() {
  Role.estimatedDocumentCount((err, count) => {
    if (!err && count === 0) {
      new Role({
        name: "user",
      }).save((err) => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'user' to roles collection");
      });

      new Role({
        name: "moderator",
      }).save((err) => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'moderator' to roles collection");
      });

      new Role({
        name: "admin",
      }).save((err) => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'admin' to roles collection");
      });
    }
  });
}
app.get("/file/:image", function (req, res) {
  res.sendFile(__dirname+"/uploads/"+req.params.image);
}); 
module.exports = router;