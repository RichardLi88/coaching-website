import { Link } from "react-router-dom";
import tt_bat from "../images/tt_bat.svg";
import { useState } from "react";
import { Button, Group, Text } from "@mantine/core";
import Classes from "../css/NavBar.module.css";

function NavBar() {
  const [currentPage, setCurrentPage] = useState("home");

  function toggleFocus(focus) {
    setCurrentPage(focus);
  }

  return (
    <div className={Classes.navcontainer}>
      <div className={Classes["nav-left"]}>
        <div className={Classes.imgcontainer}>
          <img src={tt_bat} alt="table tennis bat" className={Classes.navimg} />
        </div>

        <Text
          className={Classes.navtitle}
          fw={700}
          variant="gradient"
          size="xl"
          gradient={{ from: "blue", to: "cyan", deg: 90 }}
        >
          Richard TT
        </Text>
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
      </Group>
      <Group
        className={Classes["nav-right"]}
        justify="flex-end"
        gap="xl"
        mr={20}
      >
        <Button variant="gradient">Sign Up</Button>
        <Button variant="gradient">Login</Button>
      </Group>
    </div>
  );
}

export default NavBar;
