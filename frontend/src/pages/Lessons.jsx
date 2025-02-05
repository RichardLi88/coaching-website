import { Box, Container, Flex, Text } from "@mantine/core";
import styles from "../css/Lessons.module.css";
import LessonGrid from "../components/LessonGrid";

function Lessons() {
  return (
    <>
      <Container fluid h={2000} bg="rgba(144, 238, 144,0.5)">
        <Flex fluid h={"50vh"} bg="" justify="flex-start" align="center">
          <Box className={styles.hottest}></Box>
        </Flex>
        <Text>All lesson plans </Text>
        <Container fluid bg="">
          <LessonGrid />
        </Container>
      </Container>
    </>
  );
}

export default Lessons;
