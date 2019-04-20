// Dependencies
const router = require("express").Router();
const googleController = require("../../controllers/googleController");

// Routes from "/api/google"
router.route("/")
    .get(googleController.findAll);

module.exports = router;