import { Link } from "react-router-dom";
import tt_bat from "../images/tt_bat.svg";
import { useState } from "react";
import { Button } from "@mantine/core";
import Classes from "../css/NavBar.module.css";

function NavBar() {
  const [currentPage, setCurrentPage] = useState("home");

  function toggleFocus(focus) {
    setCurrentPage(focus);
  }

  return (
    <div className={Classes.navcontainer}>
      <div className={Classes.navleft}>
        <div className={Classes.imgcontainer}>
          <img src={tt_bat} alt="table tennis bat" className={Classes.navimg} />
        </div>

        <p className={Classes.navtitle}>Richard TT</p>
      </div>
      <div className={Classes.navright}>
        <Button
          className={currentPage === "home" ? Classes.focused : ""}
          variant="subtle"
          radius="xl"
          onClick={() => {
            toggleFocus("home");
          }}
        >
          <Link className={Classes.navlink} to="/">
            Home
          </Link>
        </Button>
        <Button
          className={currentPage === "about" ? Classes.focused : ""}
          variant="subtle"
          radius="xl"
          onClick={() => {
            toggleFocus("about");
          }}
        >
          <Link className={Classes.navlink} to="/about">
            About
          </Link>
        </Button>
        <Button
          className={currentPage === "lessons" ? Classes.focused : ""}
          variant="subtle"
          radius="xl"
          onClick={() => {
            toggleFocus("lessons");
          }}
        >
          <Link className={Classes.navlink} to="/lessons">
            Lessons
          </Link>
        </Button>
        <Button
          className={currentPage === "more" ? Classes.focused : ""}
          variant="subtle"
          radius="xl"
          onClick={() => {
            toggleFocus("more");
          }}
        >
          <Link className={Classes.navlink} to="/more">
            More Info
          </Link>
        </Button>
      </div>
    </div>
  );
}

export default NavBar;
