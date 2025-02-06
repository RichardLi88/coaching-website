import { Link } from "react-router-dom";
import tt_bat from "../images/tt_bat.svg";
import { useLocalStorage } from "@mantine/hooks";
import { Button, Group, Text } from "@mantine/core";
import Classes from "../css/NavBar.module.css";
import { useContext, useEffect } from "react";
import { userContext } from "../contexts/UserContext";

function NavBar() {
  const [currentPage, setCurrentPage] = useLocalStorage({
    key: "currentPage",
    defaultValue: "home",
  });

  const { user, userContextLogout } = useContext(userContext);

  function toggleFocus(focus) {
    setCurrentPage(focus);
  }

  return (
    <div className={Classes.navcontainer}>
      <div className={Classes["nav-left"]}>
        <Text
          className={Classes.navtitle}
          fw={700}
          variant="gradient"
          size="xl"
          ml={20}
          gradient={{ from: "blue", to: "cyan", deg: 90 }}
        >
          Richard TT
        </Text>
        <div className={Classes.imgcontainer}>
          <img src={tt_bat} alt="table tennis bat" className={Classes.navimg} />
        </div>
      </div>
      <Group className={Classes["nav-mid"]} justify="center">
        <Link className={Classes.navlink} to="/">
          <Button
            classNames={{
              root: `${currentPage === "home" ? Classes.focused : ""} ${
                Classes.navtab
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
        <Link className={Classes.navlink} to="/about">
          <Button
            className={currentPage === "about" ? Classes.focused : ""}
            variant="subtle"
            radius="xl"
            onClick={() => {
              toggleFocus("about");
            }}
          >
            About
          </Button>
        </Link>
        <Link className={Classes.navlink} to="/lessons">
          <Button
            className={currentPage === "lessons" ? Classes.focused : ""}
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
          className={currentPage === "inquire" ? Classes.focused : ""}
          variant="subtle"
          radius="xl"
          onClick={() => {
            toggleFocus("inquire");
          }}
        >
          <Link className={Classes.navlink} to="/inquire">
            Inquire
          </Link>
        </Button>
        <Link className={Classes.navlink} to="/more">
          <Button
            className={currentPage === "more" ? Classes.focused : ""}
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
          <Link className={Classes.navlink} to="/member">
            <Button
              className={currentPage === "member" ? Classes.focused : ""}
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
        className={Classes["nav-right"]}
        justify="flex-end"
        gap="xl"
        mr={20}
      >
        {!user && (
          <Link className={Classes.navlink} to="/signup">
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
          <Link className={Classes.navlink} to="/login">
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
          <Link className={Classes.navlink} to="/">
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
      </Group>
    </div>
  );
}

export default NavBar;
