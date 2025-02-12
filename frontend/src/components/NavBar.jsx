import { Link } from "react-router-dom";
import tt_bat from "../images/tt_bat.svg";
import { Avatar, Button, Group, Text, Menu, Flex, Burger } from "@mantine/core";
import styles from "../css/components/NavBar.module.css";
import { useContext, useEffect, useState } from "react";
import { userContext } from "../contexts/UserContext";
import { IconSettings, IconTrash, IconUser } from "@tabler/icons-react";
import { useDisclosure } from "@mantine/hooks";

const navItems = [
  { style: styles.navlink, currentPage: "home", to: "/", name: "Home" },
  {
    style: styles.navlink,
    currentPage: "lessons",
    to: "/lessons",
    name: "Lessons",
  },
  {
    style: styles.navlink,
    currentPage: "more",
    to: "/more",
    name: "More Info",
  },
  {
    style: styles.navlink,
    currentPage: "admin",
    to: "/admin",
    name: "Admin Panel",
    reqAdmin: true,
  },
];
function NavBar() {
  const [currentPage, setCurrentPage] = useState("home");
  const [opened, { toggle }] = useDisclosure();
  const { user, userContextLogout } = useContext(userContext);
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    const page = sessionStorage.getItem("currentPage");
    if (page) setCurrentPage(page);
  });

  function changePage(page) {
    setCurrentPage(page);
    sessionStorage.setItem("currentPage", page);
  }

  function openNav() {
    setOpenMenu((prev) => !prev);
  }

  return (
    <div className={styles.navcontainer}>
      <div className={styles[`nav-left`]}>
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
      <Flex
        className={`${styles["nav-mid"]} ${openMenu ? styles["nav-open"] : ""}`}
        justify="space-evenly"
      >
        {navItems.map((item) => {
          if (!item?.isAdmin || (item?.isAdmin && user?.isAdmin)) {
            return (
              <Link className={item.style} to={item.to} key={item.currentPage}>
                <Button
                  className={`${
                    currentPage === item.currentPage ? styles.focused : ""
                  }`}
                  variant="subtle"
                  radius="xl"
                  key={item.currentPage}
                  onClick={() => {
                    changePage(item.currentPage);
                  }}
                >
                  {item.name}
                </Button>
              </Link>
            );
          }
        })}
      </Flex>
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
                changePage("");
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
                changePage("");
              }}
            >
              Login
            </Button>
          </Link>
        )}
        <Flex
          justify="center"
          align="center"
          gap={20}
          className={styles["nav-btns"]}
        >
          {user && (
            <Link className={styles.navlink} to="/">
              <Button
                variant="gradient"
                onClick={() => {
                  changePage("home");
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
        </Flex>
      </Group>
      <Burger
        opened={opened}
        size="lg"
        className={styles["nav-burger"]}
        onClick={() => {
          toggle();
          openNav();
        }}
        aria-label="Toggle navigation"
      />
    </div>
  );
}

export default NavBar;
