import {
  Flex,
  TextInput,
  PasswordInput,
  Title,
  Button,
  Image,
} from "@mantine/core";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import styles from "../css/pages/Login.module.css";
import { useForm } from "@mantine/form";
import InvalidNotif from "../components/popups/InvalidNotif";
import SuccessNotif from "../components/popups/SuccessNotif";
import { simpleValidateLogin } from "../utility/Validate";
import { login } from "../utility/fetchAuthentication";
import { userContext } from "../contexts/UserContext";
import { useNavigate } from "react-router-dom";
import Background from "../components/utility/Background";

function Login() {
  const [invalid, setInvalid] = useState(false);
  const [reason, setReason] = useState("Invalid inputs");
  const [success, setSuccess] = useState(false);
  const { userContextLogin } = useContext(userContext);
  const navigate = useNavigate();

  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      username: "",
      password: "",
    },
  });

  async function handleSubmit() {
    const info = form.getValues();
    const result = simpleValidateLogin(info);
    if (!result.success) {
      setReason(result.reason);
      setInvalid(true);
      return;
    }
    try {
      const { success, data } = await login(info);
      if (success) {
        console.log(data);
        setSuccess(true);
        userContextLogin(data);
        sessionStorage.setItem("currentPage", "home");
        setTimeout(() => {
          navigate("/", { replace: true });
        }, 700);
      } else {
        setReason(data);
        setInvalid(true);
      }
    } catch (err) {
      console.log(err.message);
    }
  }

  return (
    <Background>
      <div className={styles["box"]}>
        <form className={styles["form-container"]}>
          <Title>Log In</Title>
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
            <Link to="/signup">Create an account</Link>
            {invalid && (
              <InvalidNotif
                close={() => setInvalid(false)}
                title={`Invalid Sign in details`}
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
        <Flex className={styles["login-right"]} justify="center">
          <Image src="https://www.chinadailyhk.com/upload/main/image/2024/08/09/70dc8e9fe1d5084c38a984e8a86c0a2f.png" />
        </Flex>
      </div>
    </Background>
  );
}

export default Login;
