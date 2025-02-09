import { Button, ScrollArea, SimpleGrid, Stack, Text } from "@mantine/core";
import { useEffect, useRef, useState } from "react";
import { formatDate, getTrainingHistory } from "../../utility/training";
import TrainingCard from "../TrainingCard";
import styles from "../../css/components/MemberC.module.css";

const badgeColour = {
  private: "violet",
  group: "blue",
  service: "teal",
  competition: "red",
  casual: "yellow",
};

function TrainingHistory() {
  const [trainings, setTrainings] = useState([]);
  const [currentTrainingCount, setcurrentTrainingCount] = useState(0);
  const [loadMore, setLoadMore] = useState(false);
  const rendered = useRef(false);

  useEffect(() => {
    if (!rendered.current) {
      rendered.current = true;
      getAllTraining();
    }
  }, []);

  async function getAllTraining() {
    const data = await getTrainingHistory(currentTrainingCount);
    if (!data.success) {
      console.log("failed", data.data);
      return;
    }

    setLoadMore(data.more);
    const tData = data.data;
    tData.forEach((data) => {
      const formattedDate = formatDate(new Date(data.date));
      data.date = formattedDate;
    });
    setTrainings((prev) => [...prev, ...tData]);
    setcurrentTrainingCount((prev) => prev + tData.length);
  }

  return (
    <>
      <Stack w={`100%`} h={`100%`} p={20}>
        <Text
          variant="gradient"
          gradient={{ from: "cyan", to: "lightblue", deg: 0 }}
          fz={50}
          fw={900}
        >
          Training History
        </Text>
        <ScrollArea
          w={`100%`}
          h={`100%`}
          className={styles["training-history-scroll"]}
        >
          <SimpleGrid
            cols={{ base: 1, md: 2 }}
            verticalSpacing={"md"}
            spacing={10}
          >
            {trainings.map((training) => {
              return (
                <TrainingCard
                  key={training._id}
                  bColour={badgeColour[training.trainingType]}
                  data={training}
                />
              );
            })}
          </SimpleGrid>
          {loadMore && (
            <Button
              variant="gradient"
              gradient={{ from: "blue", to: "cyan", deg: 90 }}
              mt={20}
              onClick={getAllTraining}
            >
              Load More
            </Button>
          )}
        </ScrollArea>
      </Stack>
    </>
  );
}

export default TrainingHistory;
