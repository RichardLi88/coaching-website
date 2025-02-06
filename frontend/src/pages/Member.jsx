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
  return (
    <Background display="flex" flex="column">
      <Flex
        w={`84vw`}
        mx={`8vw`}
        bg="white"
        h={`80vh`}
        justify="flex-start"
        align="center"
      >
        <MemberSideBar value={{ active, setActive }} />
        <Suspense>
          {active === 0 && <TrainingVolume />}
          {active === 1 && <LogTraining />}
          {active === 2 && <TrainingHistory />}
        </Suspense>
      </Flex>
    </Background>
  );
}

export default Member;
