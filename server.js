// Dependencies
const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");

// Initializing App
const PORT = process.env.PORT || 5000;
const app = express();

// Serve up static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Body Parsing for AJAX requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Call Routes
app.use(routes);

// Connecting to DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/googlebooks", {
    useCreateIndex: true,  
    useNewUrlParser: true
  });

// Connecting to PORT
app.listen(PORT, function() {
  console.log(`Server Listening On Port : ${PORT}`);
});
