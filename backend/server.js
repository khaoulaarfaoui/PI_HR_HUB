const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const router = express.Router();
const mongoose = require("mongoose");
const Role = require("../backend/models/Role");
const db = require("../backend/models");

const candidate = require("./routes/Candidate/CandidateAPI");
const test = require("./Controllers/candidateTests/testController");
const hr = require("./routes/HR/HRAPI");
const dbConfig = require("./config/DBconfig");
const cv = require("./cv/app");
const multer = require("multer");
const path = require("path");
const job = require("./routes/JobsAPI");
const debug = require("debug")("server:server");
const http = require("http");
const socket = require("socket.io");
const connectIo = require("./chatbotService");
const eventsmodel = require("./Controllers/events/eventController");
const userRouter = require("./routes/Test/user");
const testRouter = require("./routes/Test/test");
require("dotenv").config();
const morgan = require("morgan");
const app = express();
const corsOptions = {
  origin: "http://localhost:8081",
};
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());
app.use(cors(corsOptions));
app.use(morgan("tiny"));
app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', ' * ');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Methods', 'GET, HEAD, OPTIONS, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin, Accept, X-Requested-With, Content-Type,Access-Control-Request-Method,Access-Control-Request-Headers');
  //and remove cacheing so we get the most recent questions
  res.setHeader('Cache-Control', 'no-cache');
  next();
});

app.use("/api/user", userRouter);
app.use("/api/test", testRouter);
app.use("/test", test);
app.use("/job", job);
app.use("/cv", cv);
app.use("/events", eventsmodel);
if (
  process.env.NODE_ENV === "production" ||
  process.env.NODE_ENV === "staging"
) {
  app.use(express.static("client/build"));

  app.all("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
  });
}
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
//Use our router configuration when we call /api
app.use('/api', router);
//starts the server and listens for requests

 
app.use("/candidate", candidate);
app.use("/hr", hr);
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

module.exports = router;
