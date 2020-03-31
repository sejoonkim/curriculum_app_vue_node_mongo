const express = require("express");
const mongoose = require("mongoose");

const { Curriculum } = require("@db");

const router = express.Router();

// Get all curricula
router.get("/", async function(req, res) {
  const curricula = await Curriculum.find();
  res.send(curricula);
});

// Create new curricula
router.post("/", async function(req, res) {
  const { name, goal, description, sections } = req.body;
  const curriculum = new Curriculum({
    name,
    goal,
    description,
    sections
  });
  await curriculum.save();
  res.send(201, "Success");
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
