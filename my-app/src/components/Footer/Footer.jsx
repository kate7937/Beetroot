import { NavLink, Link } from "react-router-dom";
import "reset-css";
import "./footer.scss";
import {ReactComponent as Inst} from "./img/Inst.svg";
import {ReactComponent as Twitter} from "./img/twitter.svg";
import {ReactComponent as Facebook} from "./img/facebook.svg";
import {ReactComponent as Post} from "./img/post.svg";
import footer_img from "./img/footer_img.png";

function Footer () {
    return (
        <footer className="footer">
            <nav>
              <ul>
                <li><NavLink to='/'>Home</NavLink></li>
                <li><NavLink to='/movies'>Movies</NavLink></li>
                <li><NavLink to='/contacts'>Contacts</NavLink></li>
                <li><NavLink to='/ownlist'>Own List</NavLink></li>
              </ul>
            </nav>
            <div className="social">
                <Link><Inst/></Link>
                <Link><Facebook/></Link>
                <Link><Twitter/></Link>
                <Link><Post/></Link>
            </div>
            <h3>© 2024 Movies Anywhere. All Rights Reserved.</h3>
            <img src={footer_img} alt="photo" />
        </footer>
    )
}

export default Footer;