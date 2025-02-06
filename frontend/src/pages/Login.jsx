import { Flex, TextInput, PasswordInput, Title, Button } from "@mantine/core";
import { Link } from "react-router-dom";
import { useState } from "react";
import styles from "../css/Login.module.css";
import { useForm } from "@mantine/form";
import InvalidNotif from "../components/notifications/InvalidNotif";
import SuccessNotif from "../components/notifications/SuccessNotif";
import { simpleValidateLogin } from "../utility/Validate";
function Login() {
  const [invalid, setInvalid] = useState(false);
  const [reason, setReason] = useState("Invalid inputs");
  const [success, setSuccess] = useState(false);
  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      username: "",
      password: "",
    },
  });

  async function handleSubmit() {
    const data = form.getValues();
    const result = simpleValidateLogin(data);
    if (!result.success) {
      setReason(result.reason);
      setInvalid(true);
      return;
    }
  }

  return (
    <Flex className={styles["main-container"]}>
      <form className={styles["form-container"]}>
        <Title>Sign In</Title>
        <TextInput
          withAsterisk
          label="Username"
          placeholder="Username"
          key={form.key("username")}
          {...form.getInputProps("username")}
        />
        <PasswordInput
          withAsterisk
          label="Password"
          placeholder="Password"
          key={form.key("password")}
          {...form.getInputProps("password")}
        />
        <div className={styles["form-btns"]}>
          <Button
            variant="gradient"
            gradient={{ from: "blue", to: "cyan", deg: 90 }}
            className={styles["form-btn"]}
            onClick={handleSubmit}
          >
            Sign In
          </Button>
          <Link to="/login">Create an account</Link>
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
        </div>
      </form>
    </Flex>
  );
}

export default Login;
