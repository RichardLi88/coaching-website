import { Card, Text, Group, Image } from "@mantine/core";
import { lazy, Suspense } from "react";

const LessonModal = lazy(() => import("./popups/LessonModal"));

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
      <Suspense>
        <LessonModal data={data} />
      </Suspense>
    </Card>
  );
}

export default LessonCard;
