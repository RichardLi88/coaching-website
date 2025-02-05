import { Container } from "@mantine/core";
import styles from "../css/Utility.module.css";
function Footer() {
  return (
    <Container fluid fz={12} h={20} className={styles.footer}>
      Made by: Richard Li
    </Container>
  );
}

export default Footer;
