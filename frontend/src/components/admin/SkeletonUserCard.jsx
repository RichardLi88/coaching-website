import { Flex, Skeleton } from "@mantine/core";
import styles from "../../css/components/UserCard.module.css";

function SkeletonUserCard() {
  return (
    <Flex
      justify="space-between"
      p={20}
      className={styles["container"]}
      my={10}
      mx={5}
      bg="white"
    >
      <Flex direction="column" gap={10} mr="10" w="100%">
        <Skeleton height={20} radius="xl" width="60%" />
        <Skeleton height={20} width="30%" radius="xl" />
      </Flex>
      <Flex>
        <Skeleton height={50} circle />
      </Flex>
    </Flex>
  );
}

export default SkeletonUserCard;
