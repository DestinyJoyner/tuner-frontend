import { Link } from "react-router-dom";
import error from "../assets/error-tuner.png"
import "./Error.css"

function Error(props) {
    return (
        <div className='error center-page'>
            <h1>OOOPS! YOU AREN'T <br/>SUPPOSED TO BE HERE!!</h1>
            <img src ={error} alt="error" />
            <Link to ={'/'}>
                <button className="cursor"> Beat It!</button>
            </Link>
        </div>
    );
}

export default Error;