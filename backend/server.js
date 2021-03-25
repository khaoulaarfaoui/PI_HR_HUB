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
const multer = require('multer');
var path = require('path')

app.use("/hr", hr);
app.use("/job", job);
app.use("/event", event);
app.use("/candidat", candidat);

// SET STORAGE
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname)) //Appending extension
  }
})
 
var upload = multer({ storage: storage })
app.get("/", function (req, res) {
  res.send("Hello HR HUB");
});
app.post('/uploadfile', upload.single('file'), (req, res, next) => {
  const file = req.file
  if (!file) {
    const error = new Error('Please upload a file')
    error.httpStatusCode = 400
    return next(error)
  }
    res.send(file)
  
})
app.listen(PORT, function () {
  console.log("server running on loclalhost" + PORT);
});
