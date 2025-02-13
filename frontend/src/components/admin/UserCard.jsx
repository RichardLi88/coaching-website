import { Flex, Text } from "@mantine/core";
import styles from "../../css/components/UserCard.module.css";
import DeleteUserModal from "./DeleteUserModal";

function UserCard({ user }) {
  return (
    <Flex
      justify="space-between"
      p={20}
      className={styles["container"]}
      my={10}
      mx={5}
      bg="white"
    >
      <Flex className={styles["text-container"]}>
        <Flex direction="column" gap={10} mr="10">
          <Text className={styles["responsive-remove"]}>
            <strong>Id:</strong> {`${user._id}`}
          </Text>
          <Text>
            <strong>Username:</strong> {`${user.username}`}
          </Text>
        </Flex>
        <Text className={styles["responsive-remove"]}>
          <strong>Email:</strong> {`${user.email}`}
        </Text>
      </Flex>
      <Flex align="center">
        <DeleteUserModal user={user} />
      </Flex>
    </Flex>
  );
}

export default UserCard;
