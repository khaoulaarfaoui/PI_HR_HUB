//Set up mongoose connection
const mongoose = require('mongoose');
const db = "mongodb://localhost:27017/job";
mongoose.connect(db,{ useUnifiedTopology: true,useNewUrlParser: true  });
mongoose.Promise = global.Promise;
module.exports = mongoose;