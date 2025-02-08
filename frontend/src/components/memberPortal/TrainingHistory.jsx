import { ScrollArea, SimpleGrid, Stack, Text, Title } from "@mantine/core";
import { useEffect, useState } from "react";
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
  useEffect(() => {
    async function getAllTraining() {
      const data = await getTrainingHistory();
      if (!data.success) {
        console.log("failed", data.data);
        return;
      }

      const tData = data.data;
      tData.forEach((data) => {
        const formattedDate = formatDate(new Date(data.date));
        data.date = formattedDate;
      });
      setTrainings(tData);
    }
    getAllTraining();
  }, []);
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
        </ScrollArea>
      </Stack>
    </>
  );
}

export default TrainingHistory;
