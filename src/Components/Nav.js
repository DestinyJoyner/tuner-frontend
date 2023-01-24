import { Link } from "react-router-dom";
import turntable from "../assets/turn-tables.png"
import "./Nav.css"

function Nav() {
    return (
        <nav className="nav">
            <img src={turntable} alt="turntable" />
            <Link to ="/">Home</Link>
            <Link to = "/songs">Songs</Link>
            <Link to = "/songs/new">New Song</Link>
        </nav>
    );
}

export default Nav;