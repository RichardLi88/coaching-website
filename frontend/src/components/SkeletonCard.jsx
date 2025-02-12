import { Card, Button, Flex, Skeleton } from "@mantine/core";

function SkeletonCard({ buttonText }) {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder w="100%" h="100%">
      <Flex direction="column" justify="space-between" w="100%" h="100%">
        <Flex direction="column">
          <Card.Section>
            <Skeleton height="20vh" width="20vw" mb="20" />
          </Card.Section>

          <Skeleton height={16} radius="xl" mb="5" />
          <Skeleton height={16} radius="xl" mb="5" />
          <Skeleton height={8} mt={6} width="70%" radius="xl" />
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
            {buttonText}
          </Button>
        </Flex>
      </Flex>
    </Card>
  );
}

export default SkeletonCard;
