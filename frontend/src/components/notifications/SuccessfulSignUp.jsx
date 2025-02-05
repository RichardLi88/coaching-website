import { IconCheck } from "@tabler/icons-react";
import { Notification } from "@mantine/core";
import styles from "../../css/Notifications.module.css";

function SuccessfulSignUp({ close }) {
  const iconCheck = <IconCheck size={20} />;

  return (
    <>
      <Notification
        icon={iconCheck}
        color="green"
        title="Successfully signed up"
        onClick={close}
        className={styles["notification"]}
      >
        Welcome to Richard TT.
      </Notification>
    </>
  );
}

export default SuccessfulSignUp;
