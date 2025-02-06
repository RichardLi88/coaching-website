import styles from "../css/Login.module.css";
import { Flex } from "@mantine/core";

function Background({ children }) {
  return <Flex className={styles["main-container"]}>{children}</Flex>;
}

export default Background;
