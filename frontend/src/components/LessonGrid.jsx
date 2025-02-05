import { useEffect, useState } from "react";
import LessonCard from "../components/LessonCard";
import { getLessons } from "../fetch/fetchLessons";
import { SimpleGrid } from "@mantine/core";

function LessonGrid() {
  const [lessons, setLessons] = useState([]);
  useEffect(() => {
    const retrieveLessons = async () => {
      try {
        const data = await getLessons();
        setLessons(data);
      } catch (err) {
        console.log(err.message);
      }
    };
    retrieveLessons();
  }, []);

  return (
    <SimpleGrid cols={{ base: 1, sm: 2, md: 3, lg: 5 }} spacing="sm">
      {lessons.map((lesson) => {
        return <LessonCard key={lesson._id} data={lesson} />;
      })}
    </SimpleGrid>
  );
}

export default LessonGrid;
