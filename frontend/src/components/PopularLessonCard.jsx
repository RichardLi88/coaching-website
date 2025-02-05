import { Flex, Text } from "@mantine/core";
import LessonCard from "./LessonCard";
import { useContext, useEffect, useState } from "react";
import { lessonContext } from "../contexts/LessonContext";
import { getBestLesson } from "../fetch/fetchLessons";

function PopularLessonCard() {
  const { getBestLessons } = useContext(lessonContext);
  const [lesson, setLesson] = useState({});
  useEffect(() => {
    async function getPopularLesson() {
      try {
        const data = await getBestLesson();
        setLesson(data);
      } catch (err) {
        console.log(err.message);
      }
    }
    getPopularLesson();
  }, [lesson]);

  return (
    <Flex direction="column" align="center">
      <Text
        variant="gradient"
        size="xl"
        fw={900}
        gradient={{ from: "purple", to: "brown", deg: 90 }}
      >
        Most popular lesson plan!
      </Text>
      <LessonCard key={lesson._id} data={lesson} />
      <Text>{`Clicked ${lesson.clicked} times!`}</Text>
    </Flex>
  );
}
export default PopularLessonCard;
