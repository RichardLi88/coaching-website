import { createContext, useContext, useState } from "react";
import { getLessons } from "../utility/fetchLessons";

export const lessonContext = createContext();

function LessonProvider({ children }) {
  const [lessons, setLessons] = useState([]);
  async function retrieveLessons() {
    try {
      const data = await getLessons();
      setLessons(data);
    } catch (err) {
      console.log(err.message);
    }
  }

  async function getBestLessons(number) {
    try {
      const data = await getLessons();

      const rankedLessons = data.sort({ clicked: "asc" });
      console.log(rankedLessons);
      if (number > rankedLessons.length) {
        return rankedLessons;
      }
      return rankedLessons.slice(0, number);
    } catch (err) {
      console.log(err.message);
    }
  }

  return (
    <lessonContext.Provider
      value={{ lessons, retrieveLessons, getBestLessons }}
    >
      {children}
    </lessonContext.Provider>
  );
}

export default LessonProvider;
