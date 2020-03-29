const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/curriculumapp", {
  useUnifiedTopology: true,
  useNewUrlParser: true
});

const Curriculum = mongoose.model("Curriculum", { name: String });

const curriculum = new Curriculum({ name: "JavaScript" });
curriculum.save().then(() => console.log("curriculum saved"));
