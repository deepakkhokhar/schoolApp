 const mongoose = require("mongoose");
const uri=`mongodb+srv://school_db:IknIwjpUXUlqjpxY@cluster0-uuxog.mongodb.net/schoolApp?retryWrites=true&w=majority`;
// make a connection
mongoose.connect(uri, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
});
// get reference to database
var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
  console.log("DB Connection Successful!");
});
//connection end
