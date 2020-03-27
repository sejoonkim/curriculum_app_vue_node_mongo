const express = require("express");
const router = express.Router();

// Get all curricula
router.get("/", function(req, res) {
  res.send("Hello Curricula!");
});

// Create new curricula
router.post("/", function(req, res) {
  res.send("Got a POST request");
});

router.get("/:id", function(req, res) {
  res.send(req.params);
});

router.patch("/:id", function(req, res) {
  res.send("Got a PATCH request");
});

router.delete("/:id", function(req, res) {
  res.send("Got a DELETE request");
});

module.exports = router;
