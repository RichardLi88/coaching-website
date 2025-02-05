import mongoose from "mongoose";

const lessonSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    coach: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    clicked: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true, //createdAt, updatedAt
  }
);

const Lesson = mongoose.model("Lesson", lessonSchema);

export default Lesson;
