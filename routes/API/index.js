// Dependencies
const path = require("path");
const router = require("express").Router();
const bookRoutes = require("./book");
const googleRoutes = require("./google");

// Defining Book Routes
router.use("/books", bookRoutes);

// Defining Google Routes
router.use("/google", googleRoutes);

// For anything else, render the html page
router.use((req, res) => {
    res.sendFile(path.join(__dirname, "../../client/build/index.html"))
});

module.exports = router;