import { BarChart } from "@mantine/charts";
import { Flex } from "@mantine/core";
import { useEffect, useState } from "react";
import { getData } from "../../utility/submit";
function TrainingVolume() {
  const [data, setData] = useState({});
  useEffect(() => {
    async function retrieveData() {
      console.log("hello");
      const data = await getData();
      console.log("this", data);
      setData(data);
    }

    retrieveData();
  }, []);

  return <Flex></Flex>;
}

export default TrainingVolume;
