import { Card, Image, Text, Button, Flex } from "@mantine/core";

function YoutubeCard({ data }) {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder w="100%" h="100%">
      <Flex direction="column" justify="space-between" w="100%" h="100%">
        <Flex direction="column">
          <Card.Section>
            <Image src={data.thumbnail} height={320} alt={data.title} />
          </Card.Section>

          <Text fw={500}>{data.title}</Text>

          <Text size="sm" c="dimmed">
            {data.desc}
          </Text>
          <Text size="sm" c="dimmed">
            {data.channel}
          </Text>
        </Flex>
        <Flex>
          <Button
            color="blue"
            fullWidth
            mt="md"
            radius="md"
            onClick={() => {
              window.location.href = `https://www.youtube.com/watch?v=${data.videoId}`;
            }}
          >
            Watch now
          </Button>
        </Flex>
      </Flex>
    </Card>
  );
}

export default YoutubeCard;
