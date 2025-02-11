import { Flex, Text } from "@mantine/core";
import LessonCard from "./LessonCard";
import { useContext, useEffect } from "react";
import { lessonContext } from "../../contexts/LessonContext";

function PopularLessonCard() {
  const { bestLesson, getBestLesson } = useContext(lessonContext);
  useEffect(() => {
    async function getPopularLesson() {
      try {
        await getBestLesson();
        console.log(bestLesson);
      } catch (err) {
        console.log(err.message);
      }
    }
    getPopularLesson();
  }, []);

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
      <LessonCard key={bestLesson._id} data={bestLesson} />
      <Text>{`Interacted with ${bestLesson.clicked} times!`}</Text>
    </Flex>
  );
}
export default PopularLessonCard;
