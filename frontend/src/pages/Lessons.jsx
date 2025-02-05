import { Container, SimpleGrid } from "@mantine/core";
import styles from "../css/Lessons.module.css";
import { useEffect, useState } from "react";
import LessonCard from "../components/LessonCard";
import { getLessons } from "../fetch/fetchLessons";
function Lessons() {
  const [lessons, setLessons] = useState([]);
  useEffect(() => {
    const retrieveLessons = async () => {
      try {
        const data = await getLessons();
        setLessons(data);
      } catch (err) {
        console.log(err.message);
      }
    };
    retrieveLessons();
  }, []);

  return (
    <>
      <Container fluid h={"100vh"} bg="rgba(144, 238, 144,0.5)">
        <Container fluid h={"50vh"} bg="">
          Hello
        </Container>
        <Container className={styles["grid-container"]} fluid h={"50vh"} bg="">
          <SimpleGrid cols={{ base: 1, sm: 2, md: 3, lg: 5 }} spacing="sm">
            {lessons.map((lesson) => {
              return <LessonCard key={lesson._id} data={lesson} />;
            })}
          </SimpleGrid>
        </Container>
      </Container>
    </>
  );
}

export default Lessons;
