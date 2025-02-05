import { IconX } from "@tabler/icons-react";
import { Notification } from "@mantine/core";
import styles from "../../css/Notifications.module.css";
import { useEffect } from "react";

function InvalidSignUp({ close, reason }) {
  const xIcon = <IconX size={20} />;
  useEffect(() => {
    console.log(reason);
  });
  return (
    <>
      <Notification
        icon={xIcon}
        color="red"
        title="Invalid Sign up details"
        onClick={close}
        className={styles["notification"]}
      >
        {reason}
      </Notification>
    </>
  );
}

export default InvalidSignUp;
