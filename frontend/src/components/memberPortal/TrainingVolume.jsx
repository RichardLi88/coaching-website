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

const trainingTypes = ["private", "group", "service", "competition", "casual"];
function TrainingVolume() {
  const form = useForm({
    trainingType: "",
    duration: 0,
    date: "",
    venue: "",
  });
  return (
    <>
      <Box h={`100%`} w={"80%"}>
        <form>
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
            placeholder="training venue"
            key={form.key("venue")}
            {...form.getInputProps("venue")}
          />
          <Textarea
            label="Training description"
            placeholder="Details of your training session"
            resize="vertical"
            size="lg"
            radius="md"
          />
        </form>
        <Flex justify="end">
          <Button
            mt={20}
            variant="gradient"
            gradient={{ from: "blue", to: "cyan", deg: 90 }}
            type="submit"
            px={50}
          >
            Log
          </Button>
        </Flex>
      </Box>
    </>
  );
}

export default TrainingVolume;
