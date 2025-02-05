import { Card, Text, Button, Group, Image } from "@mantine/core";

function LessonCard({ data }) {
  return (
    <Card>
      <Card.Section>
        <Image
          src="../images/fan_zhen_dong.jpg"
          height={160}
          alt="Fanzhendong"
        />
      </Card.Section>

      <Group justify="space-between" mt="md">
        <Text fw={700}>{data.title}</Text>
      </Group>

      <Text size="sm" c="dimmed">
        {data.desc}
      </Text>

      <Button color="blue" fullWidth mt="md" radius="lg">
        {`Book with ${data.coach}`}
      </Button>
    </Card>
  );
}

export default LessonCard;
