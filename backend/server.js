const express = require("express");

const bodyParser = require("body-parser");

const PORT = 3001;
const hr = require("./routes/hr");
const job = require("./routes/job");
const event = require("./routes/event");
const candidat = require("./routes/candidat");
const db=require("./config/database")
const app = express();
app.use(bodyParser.json());

app.use("/hr", hr);
app.use("/job", job);
app.use("/event", event);
app.use("/candidat", candidat);

app.get("/", function (req, res) {
  res.send("Hello HR HUB");
});

app.listen(PORT, function () {
  console.log("server running on loclalhost" + PORT);
});
