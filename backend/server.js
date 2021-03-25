const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const router = express.Router();
const mongoose = require("mongoose");
const Role = require("./models/Role");
const db = require("./models");
const dbConfig = require("./config/DBconfig");
const job = require("./routes/JobsAPI");
const eventsmodel = require("./Controllers/events/eventController");

const app = express();
var corsOptions = {
  origin: "http://localhost:8081",
};
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors(corsOptions));

app.use("/job", job);
app.use("/events",eventsmodel);

// set port, listen for requests
const PORT = process.env.PORT || 8088;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

require("./routes/User/auth")(app);
require("./routes/User/userRoute")(app);

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});

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
