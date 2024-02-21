import { NavLink, Link } from "react-router-dom";
import { useState } from "react";
import logo from "./img/logo.png";
import "reset-css";
import "./header.scss";

function Header () {
    const [isActive, setActive] = useState(false);
    function toggleClass () {
        setActive(!isActive);
    }

    return (
        <header className={isActive ? "header active" : "header"}>
            <Link to="/"><img src={logo} alt="logo" /></Link>
            <nav>
              <ul>
                <li><NavLink to='/'>Home</NavLink></li>
                <li><NavLink to='/movies'>Movies</NavLink></li>
                <li><NavLink to='/contacts'>Contacts</NavLink></li>
                <li><NavLink to='/ownlist'>Own List</NavLink></li>
              </ul>
            </nav>
            <button>Sing In</button>
            <div 
              onClick={toggleClass}
              className="burger"
              >
                <span></span>
                <span></span>
                <span></span>
            </div>
        </header>
    )
}

export default Header;