import {
  Select,
  TextInput,
  Title,
  Box,
  NumberInput,
  Textarea,
  Flex,
  Button,
} from "@mantine/core";
import { DateInput } from "@mantine/dates";
import { useForm } from "@mantine/form";
import { submitTrainingLog } from "../../utility/submit";
import { useContext, useState } from "react";
import { userContext } from "../../contexts/UserContext";
import { lazy, Suspense } from "react";

const trainingTypes = ["private", "group", "service", "competition", "casual"];
const InvalidNotif = lazy(() => import("../popups/InvalidNotif"));
const SuccessNotif = lazy(() => import("../popups/SuccessNotif"));

function LogTraining() {
  const [invalid, setInvalid] = useState(false);
  const [success, setSuccess] = useState(false);
  const { user } = useContext(userContext);
  const form = useForm({
    mode: "uncontrolled",
    trainingType: "",
    duration: 0,
    date: "",
    desc: "",
    venue: "",
  });

  async function formSubmitHandler(values) {
    try {
      const result = await submitTrainingLog({ ...values, userid: user._id });
      if (result.success) {
        setSuccess(true);
        form.reset();
      } else {
        setInvalid(true);
        console.log(result);
      }
    } catch (err) {
      console.log(err.message);
    }
  }
  return (
    <>
      <Box h={`100%`} w={"80%"}>
        <form onSubmit={form.onSubmit(formSubmitHandler)}>
          <Title>Training Log</Title>
          <Select
            placeholder="Pick training type"
            key={form.key("trainingType")}
            {...form.getInputProps("trainingType")}
            label="Training Type"
            data={trainingTypes}
            clearable
          />
          <NumberInput
            placeholder="0 minutes"
            label="Training Time"
            key={form.key("duration")}
            {...form.getInputProps("duration")}
            allowNegative={false}
            hideControls
          />
          <DateInput
            clearable
            defaultValue={new Date()}
            key={form.key("date")}
            {...form.getInputProps("date")}
            label={"Date"}
            placeholder="Choose a date"
          />
          <TextInput
            label="Venue"
            placeholder="Training venue"
            key={form.key("venue")}
            {...form.getInputProps("venue")}
          />
          <Textarea
            label="Training description"
            placeholder="Details of your training session"
            resize="vertical"
            size="md"
            radius="md"
            key={form.key("desc")}
            {...form.getInputProps("desc")}
          />
          <Flex justify="end" position="relative">
            <Button
              mt={20}
              variant="gradient"
              gradient={{ from: "blue", to: "cyan", deg: 90 }}
              onClick={() => form.reset()}
              w={120}
              mr={20}
            >
              Clear
            </Button>
            <Button
              mt={20}
              variant="gradient"
              gradient={{ from: "blue", to: "cyan", deg: 90 }}
              type="submit"
              w={120}
            >
              Log
            </Button>
            <Suspense>
              {success && (
                <SuccessNotif
                  close={() => {
                    setSuccess(false);
                  }}
                  title={"Successfully logged training"}
                  reason={"Keep on training!"}
                />
              )}
              {invalid && (
                <InvalidNotif
                  close={() => {
                    setInvalid(false);
                  }}
                  title={"An error occurred"}
                  reason={"Check all inputs are filled. Try again."}
                />
              )}
            </Suspense>
          </Flex>
        </form>
      </Box>
    </>
  );
}

export default LogTraining;
