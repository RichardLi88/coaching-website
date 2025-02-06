import {
  Flex,
  PasswordInput,
  TextInput,
  Title,
  Button,
  Image,
  Container,
} from "@mantine/core";
import recreational from "../images/recreational.jpg";
import { useForm } from "@mantine/form";
import styles from "../css/SignUp.module.css";
import { useState } from "react";
import { simpleValidateSignUp } from "../utility/Validate";
import { signUp } from "../utility/fetchAuthentication";
import SuccessNotif from "../components/notifications/SuccessNotif";
import InvalidNotif from "../components/notifications/InvalidNotif";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const [invalid, setInvalid] = useState(false);
  const [reason, setReason] = useState("Invalid inputs");
  const [success, setSuccess] = useState(false);
  let navigate = useNavigate();
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
      const isValid = simpleValidateSignUp(data);
      if (!isValid.success) {
        setReason(isValid.reason);
        setInvalid(true);
        return;
      }
      const response = await signUp(data);
      console.log(response);
      if (!response.success) {
        setReason(response.data);
        setInvalid(true);
        return;
      }
      setSuccess(true);
      localStorage.setItem("user", response.data);
      setTimeout(() => {
        navigate("/login", { replace: true });
      }, 600);
    } catch (error) {
      setReason("An error occurred during sign up");
      setInvalid(true);
    }
  }

  return (
    <Flex className={styles["main-container"]} justify="center">
      <Container className={styles["main-border"]}>
        <Flex className={styles["main-box"]} bg="lightblue" pl={20} pr={20}>
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
            <InvalidNotif
              close={() => setInvalid(false)}
              title={`Invalid Sign up details`}
              reason={reason}
            />
          )}
          {success && (
            <SuccessNotif
              close={() => setSuccess(false)}
              title={"Successfully signed up"}
              reason={`Welcome to Richard TT.`}
            />
          )}
        </Flex>
        <Flex className={styles["main-box"]}>
          <Image className={styles["signup-img"]} src={recreational}></Image>
        </Flex>
      </Container>
    </Flex>
  );
}
export default SignUp;
