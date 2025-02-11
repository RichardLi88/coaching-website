import styles from "../css/pages/MoreInfo.module.css";
import Background from "../components/utility/Background";
import { Accordion, Container, Title, SimpleGrid, Flex } from "@mantine/core";
import YoutubeGrid from "../components/YoutubeGrid";

const FAQ = [
  {
    value: "Where are you guys located?",
    description:
      "We are currently working at different locations. We can come to you! Tell us your closest table tennis stadium and we can organise something.",
  },
  {
    value: "How can I improve faster?",
    description:
      "There is no secret to make you suddenly better. It is important to train hard, and most importantly correctly and you will see your results in time.",
  },
  {
    value: "Can I book a table to have a hit?",
    description: "We currently do not have a stadium.",
  },
];

function MoreInfo() {
  const questions = FAQ.map((question) => {
    return (
      <Accordion.Item key={question.value} value={question.value}>
        <Accordion.Control c="blue">{question.value}</Accordion.Control>
        <Accordion.Panel>{question.description}</Accordion.Panel>
      </Accordion.Item>
    );
  });

  return (
    <Flex
      justify="center"
      mih="100vh"
      bg={`rgba(144, 238, 144,0.5)`}
      p={20}
      c="blue"
    >
      <Flex bg="white" w={`90%`} h="80%" direction="column" rowGap={20}>
        <Flex direction="column">
          <Title ta="center">FAQ</Title>
          <Accordion c="black">{questions}</Accordion>
        </Flex>
        <br />
        <br />
        <br />
        <br />
        <Flex justify="center">
          <YoutubeGrid />
        </Flex>
      </Flex>
    </Flex>
  );
}

export default MoreInfo;
