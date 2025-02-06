import { IconCheck } from "@tabler/icons-react";
import { Notification } from "@mantine/core";
import styles from "../../css/Notifications.module.css";
import { useEffect } from "react";

function SuccessNotif({ close, title, reason }) {
  useEffect(() => {
    setTimeout(() => {
      close();
    }, 5000);
  });
  const iconCheck = <IconCheck size={20} />;

  return (
    <>
      <Notification
        icon={iconCheck}
        color="green"
        title={title}
        onClick={close}
        className={styles["notification"]}
      >
        {reason}
      </Notification>
    </>
  );
}

export default SuccessNotif;
