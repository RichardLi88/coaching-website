import { createContext, useContext, useState } from "react";
import { getLessons } from "../utility/fetchLessons";

export const lessonContext = createContext();

function LessonProvider({ children }) {
  const [lessons, setLessons] = useState([]);
  const [bestLesson, setBestLesson] = useState([]);
  async function retrieveLessons() {
    try {
      const data = await getLessons();
      setLessons(data);
    } catch (err) {
      console.log(err.message);
    }
  }

  async function getBestLesson() {
    try {
      const data = await getLessons();

      const rankedLessons = data.sort((a, b) => b.clicked - a.clicked);
      setBestLesson(rankedLessons[0]);
    } catch (err) {
      console.log(err.message);
    }
  }

  return (
    <lessonContext.Provider
      value={{ lessons, bestLesson, retrieveLessons, getBestLesson }}
    >
      {children}
    </lessonContext.Provider>
  );
}

export default LessonProvider;
