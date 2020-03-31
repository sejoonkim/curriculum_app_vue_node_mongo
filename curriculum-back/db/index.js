const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/curriculumapp", {
  useUnifiedTopology: true,
  useNewUrlParser: true
});

const Curriculum = require("./Curriculum");

module.exports = {
  Curriculum
};
