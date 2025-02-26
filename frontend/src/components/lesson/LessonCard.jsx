import { Card, Text, Group, Image, Flex } from "@mantine/core";
import LessonModal from "../popups/LessonModal";
import EditLesson from "./EditLesson";
import DeleteModal from "../popups/DeleteModal";
import { useContext } from "react";
import { userContext } from "../../contexts/UserContext";

const message = {
  title: "Delete this lesson",
  body: "Are you sure you want to delete this lesson?",
};

function LessonCard({ data }) {
  const { user } = useContext(userContext);
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder maw="400">
      <Flex direction="column" justify="space-between" h={`100%`} w={`100%`}>
        <Flex direction="column">
          <Card.Section>
            <Image mah={220} src={data.image} alt={data.image} />
          </Card.Section>
          <Group justify="space-between" mt="md">
            <Text fw={700}>{data.title}</Text>
            <Text fw={900}>${data.price}</Text>
          </Group>
          <Text size="sm" c="dimmed">
            {data.desc}
          </Text>
        </Flex>
        <Flex mt="md" gap={10}>
          <LessonModal data={data} />
          {user && user.isAdmin && <EditLesson data={data} status="edit" />}
          {user && user.isAdmin && (
            <DeleteModal data={data} message={message} />
          )}
        </Flex>
      </Flex>
    </Card>
  );
}

export default LessonCard;
