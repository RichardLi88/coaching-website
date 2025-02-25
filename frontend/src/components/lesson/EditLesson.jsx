import {
  Button,
  Flex,
  LoadingOverlay,
  Modal,
  NumberInput,
  Textarea,
  TextInput,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { IconCancel, IconEdit } from "@tabler/icons-react";
import { useDisclosure } from "@mantine/hooks";
import { useContext, useEffect, useState } from "react";
import { createLesson, updateLesson } from "../../utility/fetchLessons";
import { lessonContext } from "../../contexts/LessonContext";

const editIcon = <IconEdit />;
const cancelIcon = <IconCancel />;

function EditLesson({ data, status }) {
  const [opened, { open, close }] = useDisclosure(false);
  const [mode, setMode] = useState("create");
  const [loading, setLoading] = useState(false);
  const { retrieveLessons, getBestLesson } = useContext(lessonContext);

  useEffect(() => {
    if (status === "edit") {
      setMode("edit");
    } else if (status === "create") {
      setMode("create");
    }

    if (mode === "edit") {
      form.setValues({
        title: data.title,
        coach: data.coach,
        desc: data.desc,
        price: data.price,
        image: data.image,
      });
    }
  }, [opened]);

  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      title: "",
      coach: "",
      desc: "",
      price: "",
      image: "",
    },
  });

  async function submitHandler(values) {
    setLoading(true);
    if (mode === "edit") {
      await updateLesson(values, data._id);
    } else if (mode === "create") {
      await createLesson(values);
    }

    await retrieveLessons();
    await getBestLesson();

    setTimeout(() => {
      setLoading(false);
      close();
    }, 700);
  }
  return (
    <>
      <Modal
        opened={opened}
        onClose={close}
        centered
        title={mode === "create" ? "Create Lesson" : "Edit Lesson"}
        pos="relative"
      >
        <LoadingOverlay visible={loading} />
        <form onSubmit={form.onSubmit((values) => submitHandler(values))}>
          <TextInput
            withAsterisk
            label="Title"
            placeholder="Title"
            key={form.key("title")}
            {...form.getInputProps("title")}
          />
          <TextInput
            withAsterisk
            label="Coach"
            placeholder="coach name"
            key={form.key("coach")}
            {...form.getInputProps("coach")}
          />
          <Textarea
            withAsterisk
            label="Description"
            placeholder="Enter description here"
            resize="vertical"
            key={form.key("desc")}
            {...form.getInputProps("desc")}
          />
          <NumberInput
            prefix="$"
            placeholder="$0"
            label="Cost (min $1)"
            key={form.key("price")}
            {...form.getInputProps("price")}
            min={1}
            hideControls
          />
          <TextInput
            withAsterisk
            label="Image"
            placeholder="Enter image url here"
            key={form.key("image")}
            {...form.getInputProps("image")}
          />
          <Flex mt={20} justify="end" gap={10}>
            <Button
              rightSection={cancelIcon}
              bg="red"
              onClick={() => {
                form.reset();
                close();
              }}
            >
              Cancel
            </Button>
            <Button rightSection={editIcon} type="submit">
              {mode === "create" ? "Create Lesson" : "Confirm Edit"}
            </Button>
          </Flex>
        </form>
      </Modal>

      <Button
        variant="gradient"
        gradient={{ from: "green", to: "yellow", deg: 90 }}
        onClick={open}
      >
        {editIcon}
      </Button>
    </>
  );
}

export default EditLesson;
