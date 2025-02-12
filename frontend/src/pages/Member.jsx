import { useMediaQuery } from "@mantine/hooks";
import MemberSideBar from "../components/memberPortal/MemberSideBar";
import Background from "../components/utility/Background";
import { Flex } from "@mantine/core";
import { useState, lazy, Suspense } from "react";

const TrainingVolume = lazy(() =>
  import("../components/memberPortal/TrainingVolume")
);
const LogTraining = lazy(() =>
  import("../components/memberPortal/LogTraining")
);
const TrainingHistory = lazy(() =>
  import("../components/memberPortal/TrainingHistory")
);

function Member() {
  const [active, setActive] = useState(0);
  const screen = useMediaQuery("(max-width: 800px)");
  return (
    <Background>
      <Flex
        w={`84vw`}
        mx={`8vw`}
        bg="white"
        h={`80vh`}
        justify="flex-start"
        align="center"
        pos="relative"
        direction={screen ? "column" : "row"}
      >
        <MemberSideBar value={{ active, setActive }} />
        <Flex
          w={`100%`}
          h={`100%`}
          bg="lightblue"
          justify="center"
          align="center"
          p={20}
        >
          <Suspense>
            {active === 0 && <TrainingVolume />}
            {active === 1 && <LogTraining />}
            {active === 2 && <TrainingHistory />}
          </Suspense>
        </Flex>
      </Flex>
    </Background>
  );
}

export default Member;
