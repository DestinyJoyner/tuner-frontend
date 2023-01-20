import { Link } from "react-router-dom";
import "./Nav.css"

function Nav() {
    return (
        <nav className="nav">
            <Link to ="/">Home</Link>
            <Link to = "/songs">Songs</Link>
        </nav>
    );
}

export default Nav;