import { Flex, Button, Text } from "@mantine/core";
import { IconTrash } from "@tabler/icons-react";
import styles from "../css/components/UserCard.module.css";

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
        <Button bg="red">
          <IconTrash />
        </Button>
      </Flex>
    </Flex>
  );
}

export default UserCard;
