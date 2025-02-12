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
      bg="white"
    >
      <Flex>
        <Flex direction="column" gap={10} mr="10">
          <Text>
            <strong>Id:</strong> {`${user._id}`}
          </Text>
          <Text>
            <strong>Username:</strong> {`${user.username}`}
          </Text>
        </Flex>
        <strong>Email:</strong> {`${user.email}`}
      </Flex>
      <Flex>
        <DeleteUserModal user={user} />
      </Flex>
    </Flex>
  );
}

export default UserCard;
