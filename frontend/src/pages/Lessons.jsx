import { Box, Container, Flex, Title } from "@mantine/core";
import styles from "../css/pages/Lessons.module.css";
import LessonGrid from "../components/LessonGrid";
import LessonProvider from "../contexts/LessonContext";
import PopularLessonCard from "../components/PopularLessonCard";

function Lessons() {
  return (
    <>
      <LessonProvider>
        <Container fluid bg="rgba(144, 238, 144,0.5)" pb={30}>
          <Flex h={"50vh"} justify="space-between" align="center">
            <Box className={styles["hot-desc"]}></Box>
            <Box className={styles["hot-container"]}>
              <div className={styles["popular-container"]}>
                <PopularLessonCard />
              </div>
            </Box>
          </Flex>
          <Title align="center" order={1} c="blue">
            All lesson plans
          </Title>
          <Container fluid mt={10}>
            <LessonGrid />
          </Container>
        </Container>
      </LessonProvider>
    </>
  );
}

export default Lessons;
