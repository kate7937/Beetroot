import { Link } from "react-router-dom";
import { useState } from "react";
import MainMenu from "../nav/MainMenu/MainMenu";
import data from "../../data.json";
import logo from "./img/logo.png";
import "reset-css";
import "./header.scss";

function Header() {
  const [isActive, setActive] = useState(false);
  function toggleClass() {
    setActive(!isActive);
  }

  return (
    <header className={isActive ? "header active" : "header"}>
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>
      <MainMenu links={data.mainMenu.links}></MainMenu>
      <button>Sing In</button>
      <div onClick={toggleClass} className="burger">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </header>
  );
}

export default Header;
