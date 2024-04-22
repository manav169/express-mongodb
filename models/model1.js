const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
  cName: {
    required: true,
    type: String,
  },
  durationInYears: {
    required: true,
    type: Number,
  },
  studentCount: {
    required: true,
    type: Number,
  },
});

module.exports = mongoose.model("course", dataSchema);
