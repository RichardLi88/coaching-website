import mongoose from "mongoose";

const trainingSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  trainingType: {
    type: String,
    enum: ["private", "group", "service", "competition", "casual"],
    required: true,
  },
  duration: {
    type: Number, //in minutes
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  venue: {
    type: String,
    required: true,
  },
});

const Training = mongoose.model("Training", trainingSchema, "training");

export default Training;
