import { useEffect } from "react";
import LessonCard from "./LessonCard";
import { SimpleGrid } from "@mantine/core";
import { useContext } from "react";
import { lessonContext } from "../../contexts/LessonContext";

function LessonGrid() {
  const { lessons, retrieveLessons } = useContext(lessonContext);

  useEffect(() => {
    async function getLessons() {
      await retrieveLessons();
    }
    getLessons();
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
