import { Modal, Button, TextInput, Textarea } from "@mantine/core";
import { useClickOutside, useDisclosure } from "@mantine/hooks";
import { updateClicked } from "../../utility/fetchLessons";
import { useForm } from "@mantine/form";
import { useContext, useEffect, useState } from "react";
import { userContext } from "../../contexts/UserContext";
import { DateInput } from "@mantine/dates";

function LessonModal({ data }) {
  const [opened, { open, close }] = useDisclosure(false);
  const { user } = useContext(userContext);
  const [date, setDate] = useState(null);

  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      date: "",
    },
  });

  useEffect(() => {
    console.log("here");
    console.log(data.firstname);
    if (user) {
      form.setInitialValues({
        firstname: data.firstname,
        lastname: data.lastname,
        email: data.email,
      });
    }
  }, [opened]);

  async function btnClicked() {
    try {
      const result = await updateClicked(data._id);
    } catch (err) {
      console.log(err.message);
    }
  }

  function handleSubmit(values) {
    console.log(values);
  }
  return (
    <>
      <Modal
        opened={opened}
        onClose={close}
        title={`Book with  ${data.coach} now!`}
      >
        <form onSubmit={form.onSubmit((values) => handleSubmit(values))}>
          <TextInput
            withAsterisk
            label="firstname"
            placeholder="first name"
            key={form.key("firstname")}
            {...form.getInputProps("firstname")}
          />
          <TextInput
            withAsterisk
            label="lastname"
            placeholder="last name"
            key={form.key("lastname")}
            {...form.getInputProps("lastname")}
          />
          <TextInput
            withAsterisk
            label="email"
            placeholder="email"
            key={form.key("email")}
            {...form.getInputProps("email")}
          />
          <DateInput
            withAsterisk
            clearable
            defaultValue={new Date()}
            value={date}
            onChange={setDate}
            label={"Choose a date"}
            placeholder="Choose a date"
          />
          <Textarea
            size="md"
            radius="md"
            label="What do you want to improve on?"
            placeholder="tell us what you want to improve on"
            resize="vertical"
          />

          <Button
            variant="gradient"
            gradient={{ from: "blue", to: "cyan", deg: 90 }}
            mt={20}
            type="submit"
          >
            Schedule now
          </Button>
        </form>
      </Modal>

      <Button
        color="blue"
        fullWidth
        mt="md"
        radius="lg"
        onClick={() => {
          btnClicked();
          open();
        }}
      >{`Book with ${data.coach}`}</Button>
    </>
  );
}
export default LessonModal;
