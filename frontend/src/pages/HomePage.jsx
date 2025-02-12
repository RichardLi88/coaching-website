import { Flex, Title, Text, Image, List } from "@mantine/core";
import Background from "../components/utility/Background";
import styles from "../css/pages/Home.module.css";
import { useNavigate } from "react-router-dom";
function HomePage() {
  const navigate = useNavigate();
  return (
    <>
      <Background>
        <Flex
          justify="center"
          align="center"
          direction="column"
          className={`${styles["main-container"]} ${styles["overlay"]}`}
        >
          <Title c="white" className={styles["main-title"]}>
            Richard TT
          </Title>
          <Flex
            m={20}
            c="white"
            direction="column"
            maw="50vw"
            className={`${styles["fade-out"]} ${styles["top-text"]}`}
          >
            <Title className={styles["title"]}>
              Master Your Game with Expert Table Tennis Coaching
            </Title>
            <Text className={styles["text"]}>
              Welcome to Richard TT, where players of all levels sharpen their
              skills with professional coaching. Whether you're a beginner or a
              competitive player, our expert trainers will help you master
              technique, strategy, and confidence.
            </Text>
            <Text fw={700} mt={10} fz="20px" className={styles["text"]}>
              🏓 Why Train with Us?
            </Text>
            <ul>
              <Text className={styles["text"]}>
                ✔ Certified, experienced coaches
              </Text>
              <Text className={styles["text"]}>
                ✔ Personalized training for all levels
              </Text>
              <Text className={styles["text"]}>
                ✔ Top-tier facilities & equipment
              </Text>
            </ul>
            <Text fz="xl" fw={700} className={styles["text"]}>
              Ready to improve your game?
              <span
                className={styles["link"]}
                onClick={() => {
                  sessionStorage.setItem("currentPage", "");
                  setTimeout(() => {
                    navigate("/signup", { replace: true });
                  }, 350);
                }}
              >
                Join us today!
              </span>
            </Text>
          </Flex>
        </Flex>
      </Background>
      <Background>
        <Flex
          justify="center"
          align="center"
          m="20"
          bg="white"
          className={styles["responsive-column-one"]}
        >
          <Flex>
            <Image
              p={20}
              className={`${styles["grow-animate"]}`}
              src="https://img.olympics.com/images/image/private/t_s_pog_staticContent_hero_lg_2x/f_auto/primary/xdybg1vfkoe81rhtrjv7"
            />
          </Flex>
          <Flex
            direction="column"
            align="center"
            className={`${styles["grow-animate"]} ${styles["text-container"]}`}
            mx={50}
          >
            <Title>Our Goal</Title>
            <Text fz="20px">
              Our mission is to develop passionate and skilled table tennis
              players by providing top-quality coaching, fostering
              sportsmanship, and encouraging continuous improvement. We strive
              to create a positive and competitive environment where athletes
              can achieve their full potential and love for the game.
            </Text>
          </Flex>
          <Flex></Flex>
        </Flex>
        <Flex
          p={20}
          justify="space-evenly"
          w="100%"
          bg="white"
          m={20}
          className={styles["responsive-column-two"]}
        >
          <Flex
            direction="column"
            align="center"
            justify="center"
            p={20}
            className={styles["grow-animate"]}
          >
            <Title>What we currently offer</Title>
            <List fz="20px">
              <List.Item>
                High quality personal coaching by experienced table tennis
                coaches
              </List.Item>
              <List.Item>
                Weekly group sessions that include physical training
              </List.Item>
              <List.Item>
                Weekly casual sessions for those who just want a hit
              </List.Item>
              <List.Item>
                Weekly tournaments with prizes for the winner
              </List.Item>
            </List>
          </Flex>
          <Flex justify="center">
            <Image
              className={`${styles["grow-animate"]}`}
              src="https://i.ytimg.com/vi/Y-3GvcKuUlY/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCOSQhFUHzmplwrA2YAO8626WD7nw"
            />
          </Flex>
        </Flex>
      </Background>
    </>
  );
}

export default HomePage;
