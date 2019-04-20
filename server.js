// Dependencies
const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");

// Initializing App
const PORT = process.env.PORT || 3001;
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
  process.env.MONGODB_URI || "mongodb://user:password1@ds145356.mlab.com:45356/heroku_z1fsbcgl", {
    useCreateIndex: true,  
    useNewUrlParser: true
  });

// Connecting to PORT
app.listen(PORT, function() {
  console.log(`Server Listening On Port : ${PORT}`);
});
