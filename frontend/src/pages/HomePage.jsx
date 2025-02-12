import { Flex, Title, Text } from "@mantine/core";
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
          <Title c="white" fz="120px">
            Richard TT
          </Title>
          <Flex m={20} c="white" direction="column" maw="50vw">
            <Title>Master Your Game with Expert Table Tennis Coaching</Title>
            <Text>
              Welcome to Richard TT, where players of all levels sharpen their
              skills with professional coaching. Whether you're a beginner or a
              competitive player, our expert trainers will help you master
              technique, strategy, and confidence.
            </Text>
            <Text fw={700} mt={10} fz="20px">
              🏓 Why Train with Us?
            </Text>
            <ul>
              <Text>✔ Certified, experienced coaches</Text>
              <Text>✔ Personalized training for all levels</Text>
              <Text>✔ Top-tier facilities & equipment</Text>
            </ul>
            <Text fz="xl" fw={700}>
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
    </>
  );
}

export default HomePage;
