import { Link } from "react-router-dom";
import tt_bat from "../images/tt_bat.svg";
import { useSessionStorage } from "@mantine/hooks";
import { Avatar, Button, Group, Text, Menu } from "@mantine/core";
import styles from "../css/components/NavBar.module.css";
import { useContext } from "react";
import { userContext } from "../contexts/UserContext";
import { IconSettings, IconTrash, IconUser } from "@tabler/icons-react";

function NavBar() {
  const [currentPage, setCurrentPage] = useSessionStorage({
    key: "currentPage",
    defaultValue: "home",
  });

  const { user, userContextLogout } = useContext(userContext);

  function toggleFocus(focus) {
    setCurrentPage(focus);
  }

  return (
    <div className={styles.navcontainer}>
      <div className={styles["nav-left"]}>
        <Text
          className={styles.navtitle}
          fw={700}
          variant="gradient"
          size="xl"
          ml={20}
          gradient={{ from: "blue", to: "cyan", deg: 90 }}
        >
          Richard TT
        </Text>
        <div className={styles.imgcontainer}>
          <img src={tt_bat} alt="table tennis bat" className={styles.navimg} />
        </div>
      </div>
      <Group className={styles["nav-mid"]} justify="center">
        <Link className={styles.navlink} to="/">
          <Button
            classNames={{
              root: `${currentPage === "home" ? styles.focused : ""} ${
                styles.navtab
              }`,
            }}
            variant="subtle"
            radius="xl"
            onClick={() => {
              toggleFocus("home");
            }}
          >
            Home
          </Button>
        </Link>
        <Link className={styles.navlink} to="/about">
          <Button
            className={currentPage === "about" ? styles.focused : ""}
            variant="subtle"
            radius="xl"
            onClick={() => {
              toggleFocus("about");
            }}
          >
            About
          </Button>
        </Link>
        <Link className={styles.navlink} to="/lessons">
          <Button
            className={currentPage === "lessons" ? styles.focused : ""}
            variant="subtle"
            radius="xl"
            onClick={() => {
              toggleFocus("lessons");
            }}
          >
            Lessons
          </Button>
        </Link>
        <Button
          className={currentPage === "inquire" ? styles.focused : ""}
          variant="subtle"
          radius="xl"
          onClick={() => {
            toggleFocus("inquire");
          }}
        >
          <Link className={styles.navlink} to="/inquire">
            Inquire
          </Link>
        </Button>
        <Link className={styles.navlink} to="/more">
          <Button
            className={currentPage === "more" ? styles.focused : ""}
            variant="subtle"
            radius="xl"
            onClick={() => {
              toggleFocus("more");
            }}
          >
            More Info
          </Button>
        </Link>
        {user && (
          <Link className={styles.navlink} to="/member">
            <Button
              className={currentPage === "member" ? styles.focused : ""}
              variant="subtle"
              radius="xl"
              onClick={() => {
                toggleFocus("member");
              }}
            >
              Member Portal
            </Button>
          </Link>
        )}
      </Group>
      <Group
        className={styles["nav-right"]}
        justify="flex-end"
        gap="xl"
        mr={20}
      >
        {!user && (
          <Link className={styles.navlink} to="/signup">
            <Button
              variant="gradient"
              onClick={() => {
                toggleFocus("");
              }}
            >
              Sign Up
            </Button>
          </Link>
        )}
        {!user && (
          <Link className={styles.navlink} to="/login">
            <Button
              variant="gradient"
              onClick={() => {
                toggleFocus("");
              }}
            >
              Login
            </Button>
          </Link>
        )}
        {user && (
          <Link className={styles.navlink} to="/">
            <Button
              variant="gradient"
              onClick={() => {
                toggleFocus("home");
                userContextLogout();
              }}
            >
              Logout
            </Button>
          </Link>
        )}
        {user && (
          <Menu
            withArrow
            transitionProps={{ transition: "rotate-right", duration: 150 }}
          >
            <Menu.Target>
              <Avatar
                radius="xl"
                name={user.firstname + " " + user.lastname}
                color="cyan"
                size="lg"
                className={styles["avatar"]}
              />
            </Menu.Target>
            <Menu.Dropdown>
              <Menu.Label>Options</Menu.Label>
              <Menu.Item leftSection={<IconSettings size={14} />}>
                Settings
              </Menu.Item>
              <Menu.Item leftSection={<IconUser size={14} />}>
                Account Settings
              </Menu.Item>
              <Menu.Item color="red" leftSection={<IconTrash size={14} />}>
                Delete my Account
              </Menu.Item>
            </Menu.Dropdown>
          </Menu>
        )}
      </Group>
    </div>
  );
}

export default NavBar;
