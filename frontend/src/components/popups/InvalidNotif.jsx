import { IconX } from "@tabler/icons-react";
import { Notification } from "@mantine/core";
import styles from "../../css/components/Notifications.module.css";
import { useEffect } from "react";

function InvalidNotif({ close, title, reason }) {
  const xIcon = <IconX size={20} />;

  useEffect(() => {
    setTimeout(() => {
      close();
    }, 5000);
  });
  return (
    <>
      <Notification
        icon={xIcon}
        color="red"
        title={title}
        onClick={close}
        className={styles["notification"]}
      >
        {reason}
      </Notification>
    </>
  );
}

export default InvalidNotif;
