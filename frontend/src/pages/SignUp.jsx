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
import { useState } from "react";
import { validateSignUp } from "../utility/Validate";
import { signUp } from "../utility/fetchAuthentication";
import SuccessfulSignUp from "../components/notifications/SuccessfulSignUp";
import InvalidSignUp from "../components/notifications/InvalidSignUp";

function SignUp() {
  const [invalid, setInvalid] = useState(false);
  const [reason, setReason] = useState("Invalid inputs");
  const [success, setSuccess] = useState(false);

  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      firstname: "",
      lastname: "",
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
    },
  });

  async function handleSubmit() {
    try {
      const data = form.getValues();
      const isValid = validateSignUp(data);
      if (!isValid.success) {
        setReason(isValid.reason);
        console.log(isValid);
        console.log(reason);
        setInvalid(true);
        return;
      }
      console.log(data);
      const response = await signUp(data);
      console.log(response);
      if (!response.success) {
        setReason(response.data);
        setInvalid(true);
        return;
      }
      setSuccess(true);
    } catch (error) {
      setReason("An error occurred during sign up");
      setInvalid(true);
      console.error(error);
    }
  }

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
              key={form.key("firstname")}
              {...form.getInputProps("firstname")}
            />
            <TextInput
              withAsterisk
              label="Last Name"
              placeholder="Last Name"
              key={form.key("lastname")}
              {...form.getInputProps("lastname")}
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
            onClick={handleSubmit}
          >
            Sign Up
          </Button>
        </form>
        {invalid && (
          <InvalidSignUp close={() => setInvalid(false)} reason={reason} />
        )}
        {success && <SuccessfulSignUp close={() => setSuccess(false)} />}
      </Flex>
      <Flex className={`${styles["main-box"]} ${styles["main-2"]}`}>
        <Image className={styles["signup-img"]} src={recreational}></Image>
      </Flex>
    </Flex>
  );
}
export default SignUp;
