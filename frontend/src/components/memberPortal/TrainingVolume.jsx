import { BarChart } from "@mantine/charts";
import { Flex, Title } from "@mantine/core";
import { useEffect, useState } from "react";
import { getData } from "../../utility/training";
import { useMediaQuery } from "@mantine/hooks";
function TrainingVolume() {
  const [data, setData] = useState([]);
  const screen = useMediaQuery("(max-width: 600px)");
  useEffect(() => {
    async function retrieveData() {
      const data = await getData();
      setData(data);
    }

    retrieveData();
  }, []);

  return (
    <Flex
      w={`100%`}
      h={`100%`}
      direction="column"
      justify="center"
      align="center"
    >
      <Title mb={20} size={screen ? "30px" : "40px"}>
        Your table tennis in minutes last week
      </Title>
      <BarChart
        h={`100%`}
        w={`100%`}
        data={data}
        dataKey="date"
        type="stacked"
        series={[
          { name: "private", color: "violet.6" },
          { name: "group", color: "blue.6" },
          { name: "service", color: "teal.6" },
          { name: "competition", color: "red.6" },
          { name: "casual", color: "yellow.6" },
        ]}
        xAxisLabel="Last 7 days"
      />
    </Flex>
  );
}

export default TrainingVolume;
