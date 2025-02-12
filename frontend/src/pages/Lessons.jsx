import { Box, Container, Flex, Title, Text, Image } from "@mantine/core";
import styles from "../css/pages/Lessons.module.css";
import LessonGrid from "../components/lesson/LessonGrid";
import LessonProvider from "../contexts/LessonContext";
import EditLesson from "../components/lesson/editLesson";
import { useContext } from "react";
import { userContext } from "../contexts/UserContext";
import { useMediaQuery } from "@mantine/hooks";

function Lessons() {
  const { user } = useContext(userContext);
  const screen = useMediaQuery("(max-width: 1400px)");
  return (
    <>
      <LessonProvider>
        <Container
          fluid
          bg="rgba(144, 238, 144,0.5)"
          pb={30}
          mih="100vh"
          pos="relative"
        >
          <Flex pos="absolute" top={20} right={20}>
            {user && user?.isAdmin && <EditLesson status="create" />}
          </Flex>
          <Flex
            h={"50vh"}
            justify="space-between"
            align="center"
            gap={20}
            className={styles["container"]}
          >
            <Box className={styles["hot-desc"]} bg="white">
              <Title c="blue" className={styles["title"]}>
                What we offer?
              </Title>
              <Text size="lg" ta="center" className={styles["text"]}>
                Here at Richard TT, we have a variety of lesson plans catered
                towards players of all skill levels. It is recommended that each
                student should participate in at least one 1-on-1 coaching
                session a week, as well as participate in group training
                sessions and competition for the best improvement. However, we
                also do offer social sessions for those more casual, where
                friends and family can come down to relax and enjoy some fast
                paced ping pong!
              </Text>
              <br></br>
              <Title c="blue" className={styles["title"]}>
                How to book?
              </Title>
              <Text size="lg" ta="center" className={styles["text"]}>
                To book, please make an an account if you have not already. Then
                select select any of our plans to inquire with us, and we will
                get back to you to confirm as soon as possible!
              </Text>
            </Box>
            <Flex w="80%" h="80%" justify="center">
              <Image
                src="https://img.olympics.com/images/image/private/t_s_pog_staticContent_hero_lg/f_auto/primary/amda89zlqlmvwxv8fo7t"
                className={styles["img"]}
              />
            </Flex>
            {/*
            <div
              className={`${styles["hot-container"]} ${
                screen ? styles["none"] : ""
              }`}
            >
              
              <div className={styles["popular-container"]}>
                <PopularLessonCard />
              </div>
            </div>
            */}
          </Flex>
          <Title align="center" order={1} c="blue">
            All lesson plans
          </Title>
          <Flex fluid mt={10} display="flex" justify="center">
            <LessonGrid />
          </Flex>
        </Container>
      </LessonProvider>
    </>
  );
}

export default Lessons;
