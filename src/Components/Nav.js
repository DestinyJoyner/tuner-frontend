import { Link } from "react-router-dom";
import turntable from "../assets/turn-tables.png"
import "./Nav.css"

function Nav() {
    return (
        <nav className="nav">
            <Link to ="/"><img src={turntable} alt="turntable" /></Link>
            <Link to = "/songs">Songs</Link>
            <Link to = "/songs/new">New Song</Link>
            <Link to = "/albums">Albums</Link>
        </nav>
    );
}

export default Nav;