import Lesson from "../schemas/lesson.js";
import mongoose from "mongoose";
import { validateAllParameters } from "../utility/lessonUtil.js";

export const createLesson = async (req, res) => {
  const data = req.body;

  if (!validateAllParameters(data)) {
    return res
      .status(400)
      .json({ success: false, error: "please fill in all fields" });
  }

  //saving to db
  try {
    const newLesson = Lesson(data);
    newLesson.save();
    res.status(201).json({ success: true, message: newLesson });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

export const deleteLesson = async (req, res) => {
  const id = req.params;

  try {
    Lesson.findByIdAndDelete(id);
    res.status(200).json({ success: true, message: "successfully deleted" });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

export const updateLesson = async (req, res) => {
  const data = req.body;
  const id = req.params.id;
  if (!validateAllParameters(data)) {
    return res.status(400).json({
      success: false,
      error: "please fill in all fields / with correct data type",
    });
  }

  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res
        .status(404)
        .json({ success: false, message: "Invalid Lesson Id" });
    }

    const newLesson = await Lesson.findByIdAndUpdate(id, data, { new: true });
    res.status(201).json({ success: true, data: newLesson });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

export const getLessons = async (req, res) => {
  try {
    const allLessons = await Lesson.find({});
    return res.status(200).json({ success: true, data: allLessons });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

export const getBestLesson = async (req, res) => {
  try {
    const bestLesson = await Lesson.find().sort({ clicked: "desc" }).limit(1);
    res.status(200).json({ success: true, data: bestLesson });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

export const updateClickedLesson = async (req, res) => {
  try {
    const id = req.params.id;
    const lesson = await Lesson.findById(id);
    if (!lesson) {
      return res
        .status(404)
        .json({ success: false, message: "Lesson not found" });
    }
    lesson.clicked += 1;
    await lesson.save();
    res.status(200).json({ success: true, data: lesson });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};
