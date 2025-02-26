import { useEffect, useState } from "react";
import LessonCard from "./LessonCard";
import { SimpleGrid } from "@mantine/core";
import { useContext } from "react";
import { lessonContext } from "../../contexts/LessonContext";
import SkeletonCard from "../SkeletonCard";

function LessonGrid() {
  const { lessons, retrieveLessons } = useContext(lessonContext);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    async function getLessons() {
      await retrieveLessons();
      setTimeout(() => {
        setLoaded(true);
      }, 500);
    }
    getLessons();
  }, []);

  return (
    <SimpleGrid
      cols={{ base: 1, sm: 2, md: 3, lg: 5 }}
      spacing="sm"
      w={loaded ? "" : "90%"}
    >
      {loaded &&
        lessons.map((lesson) => {
          return <LessonCard key={lesson._id} data={lesson} />;
        })}
      {!loaded &&
        Array.from({ length: 15 }).map((_, index) => {
          return <SkeletonCard key={index} buttonText="Inquire now" />;
        })}
    </SimpleGrid>
  );
}

export default LessonGrid;
