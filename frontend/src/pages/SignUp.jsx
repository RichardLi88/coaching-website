import {
  Container,
  Flex,
  PasswordInput,
  TextInput,
  Title,
  Button,
  Image,
} from "@mantine/core";
import recreational from "../images/recreational.jpg";
import { useForm } from "@mantine/form";
import styles from "../css/SignUp.module.css";

function SignUp() {
  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      firstName: "",
      lastName: "",
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
    },
  });

  function handleSubmit() {}

  return (
    <Flex styles={styles["main-container"]} justify="center">
      <Flex
        className={`${styles["main-box"]} ${styles["main-2"]}`}
        bg="lightblue"
        pl={20}
        pr={20}
      >
        <Title>Sign Up Now!</Title>
        <form className={styles["form"]}>
          <div className={styles["form-top"]}>
            <TextInput
              withAsterisk
              label="First Name"
              placeholder="First Name"
              key={form.key("firstName")}
              {...form.getInputProps("firstName")}
            />
            <TextInput
              withAsterisk
              label="Last Name"
              placeholder="Last Name"
              key={form.key("lastName")}
              {...form.getInputProps("lastName")}
            />
          </div>

          <TextInput
            withAsterisk
            label="Username"
            placeholder="Username"
            key={form.key("username")}
            {...form.getInputProps("username")}
          />
          <TextInput
            withAsterisk
            label="Email"
            placeholder="your@email.com"
            key={form.key("email")}
            {...form.getInputProps("email")}
          />
          <PasswordInput
            withAsterisk
            label="Password"
            placeholder="Password"
            key={form.key("password")}
            {...form.getInputProps("password")}
          />
          <PasswordInput
            withAsterisk
            label="Confirm Password"
            placeholder="Confirm Password"
            key={form.key("confirmPassword")}
            {...form.getInputProps("confirmPassword")}
          />
          <Button
            variant="gradient"
            gradient={{ from: "blue", to: "cyan", deg: 90 }}
            className={styles["form-btn"]}
          >
            Sign Up
          </Button>
        </form>
      </Flex>
      <Flex className={`${styles["main-box"]} ${styles["main-2"]}`}>
        <Image className={styles["signup-img"]} src={recreational}></Image>
      </Flex>
    </Flex>
  );
}
export default SignUp;
