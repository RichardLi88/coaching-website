import { Flex, SimpleGrid, Text } from "@mantine/core";
import LessonCard from "./LessonCard";
import { useContext, useEffect } from "react";
import { lessonContext } from "../../contexts/LessonContext";

function PopularLessonCard() {
  const { bestLesson, getBestLesson } = useContext(lessonContext);
  useEffect(() => {
    async function getPopularLesson() {
      try {
        await getBestLesson();
      } catch (err) {
        console.log(err.message);
      }
    }
    getPopularLesson();
  }, []);

  return (
    <Flex direction="column" align="center" w={`100%`} h={`100%`}>
      <Text
        variant="gradient"
        size="xl"
        fw={900}
        gradient={{ from: "purple", to: "brown", deg: 90 }}
      >
        Most popular lesson plan!
      </Text>
      <SimpleGrid cols={1} h={250}>
        <LessonCard key={bestLesson._id} data={bestLesson} />
      </SimpleGrid>

      <Text>{`Interacted with ${bestLesson.clicked} times!`}</Text>
    </Flex>
  );
}
export default PopularLessonCard;
