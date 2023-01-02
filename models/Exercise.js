const mongoose = require("mongoose");
const { Schema } = mongoose;
const ExerciseSchema = new Schema({
  user:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  activity: {
    type: String,
    default: "run",
  },
  duration: {
    type: String,
    required: true
  },

  date: {
    type: Date,
    default: Date.now
  },
});

module.exports = mongoose.model("exercises", ExerciseSchema);

