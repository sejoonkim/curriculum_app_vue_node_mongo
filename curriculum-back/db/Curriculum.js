const mongoose = require("mongoose");
const timestamps = require("mongoose-timestamp");

const CurriculumSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  goal: {
    typr: String
  },
  description: {
    type: String
  },
  sections: [
    {
      name: {
        type: String,
        required: true
      },
      resources: [String],
      projects: [String]
    }
  ]
});

CurriculumSchema.plugin(timestamps);

const Curriculum = mongoose.model("Curriculum", CurriculumSchema);

module.exports = Curriculum;
