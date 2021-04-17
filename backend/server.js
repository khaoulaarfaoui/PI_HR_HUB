const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const router = express.Router();
const Role = require("../backend/models/Role");
const db = require("../backend/models");
const candidate = require("./routes/Candidate/CandidateAPI");
const hr = require("./routes/HR/HRAPI");
const hrTest = require("./routes/HR/HRTEST");
const dbConfig = require("./config/DBconfig");
const cv = require("./cv/app");
const multer = require("multer");
var path = require("path");
const job = require("./routes/JobsAPI");
var debug = require("debug")("server:server");
var http = require("http");
var socket = require("socket.io");
var connectIo = require("./chatbotService");
const eventsmodel = require("./Controllers/events/eventController");
const app = express();
var corsOptions = {
  origin: "http://localhost:8082",
};
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

app.use("/job", job);
app.use("/cv", cv);
app.use("/events", eventsmodel);
// set port, listen for requests
const PORT = process.env.PORT || 8082;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
require("../backend/routes/User/auth")(app);
require("../backend/routes/User/userRoute")(app);

require("./routes/User/auth")(app);
require("./routes/User/userRoute")(app);

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to hrbub application." });
});
app.use("/candidate", candidate);
app.use("/hr", hr);
app.use("/hrTest", hrTest);
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

// SET STORAGE
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads");
  },
  filename: function (req, file, cb) {
    cb(null,file.originalname) //Appending extension
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

app.get("/file/:image", function (req, res) {
  res.sendFile(__dirname+"/uploads/"+req.params.image);
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

module.exports = router;
