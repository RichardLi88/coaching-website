import { Badge, Flex, Title, Modal, Text, Stack } from "@mantine/core";
import styles from "../css/components/MemberC.module.css";
import { useDisclosure } from "@mantine/hooks";
function TrainingCard({ data, bColour }) {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal
        opened={opened}
        onClose={close}
        title={`Training session on ${data.date}`}
        fw={900}
        size="lg"
        centered
      >
        <Stack>
          <Badge bg={bColour}>{data.trainingType}</Badge>
          <Text className={styles["training-desc"]}>
            Description: {data.desc}
          </Text>
          <Text>Venue: {data.venue}</Text>
          <Text>Duration: {data.duration} minutes</Text>
        </Stack>
      </Modal>

      <div onClick={open}>
        <Flex
          w={`100%`}
          direction="column"
          bg="white"
          className={styles["training-card"]}
          px={15}
          py={10}
        >
          <Flex justify="space-between">
            <Title size={`md`}>{data.date}</Title>
            <Badge bg={bColour}>{data.trainingType}</Badge>
          </Flex>
          <Flex justify="space-between">
            <Flex justify="start" className={styles["training-desc"]}>
              {data.desc}
            </Flex>
            <Flex>{`${data.duration} mins`}</Flex>
          </Flex>
        </Flex>
      </div>
    </>
  );
}

export default TrainingCard;
