import { useDisclosure } from "@mantine/hooks";
import { Modal, Button, Flex } from "@mantine/core";
import { IconTrash } from "@tabler/icons-react";
import { deleteLesson } from "../../utility/fetchLessons";
import { useContext } from "react";
import { lessonContext } from "../../contexts/LessonContext";

function DeleteModal({ data }) {
  const [opened, { open, close }] = useDisclosure(false);
  const { retrieveLessons, getBestLesson } = useContext(lessonContext);
  async function deleteHandler() {
    await deleteLesson(data._id);
    await retrieveLessons();
    await getBestLesson();
    close();
  }
  return (
    <>
      <Modal
        opened={opened}
        onClose={close}
        title="Delete this lesson"
        centered
      >
        <Flex direction="column">
          Are you sure you want to remove this lesson?
          <Flex gap={20} justify="end">
            <Button
              variant="gradient"
              gradient={{ from: "blue", to: "cyan", deg: 90 }}
              mt={20}
              onClick={close}
            >
              Cancel
            </Button>
            <Button
              variant="gradient"
              gradient={{ from: "red", to: "brown", deg: 90 }}
              onClick={deleteHandler}
              mt={20}
              rightSection={<IconTrash />}
            >
              Confirm
            </Button>
          </Flex>
        </Flex>
      </Modal>

      <Button
        variant="gradient"
        gradient={{ from: "red", to: "brown", deg: 90 }}
        onClick={open}
      >
        <IconTrash />
      </Button>
    </>
  );
}

export default DeleteModal;
