import { Flex, Text } from "@mantine/core";
import LessonCard from "./LessonCard";
import { useEffect, useState } from "react";
import { getBestLesson } from "../utility/fetchLessons";

function PopularLessonCard() {
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
      <Text>{`Interacted with ${lesson.clicked} times!`}</Text>
    </Flex>
  );
}
export default PopularLessonCard;
