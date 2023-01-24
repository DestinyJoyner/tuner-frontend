import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useContextProvider } from "./Provider";
import Form from "../ReusableComponents/Form";
import back from "../assets/music-back-new.png"
import "./SongsNewForm.css"

function SongsNewForm() {
    const {API, axios} = useContextProvider()
    const navigate = useNavigate()
    const [newForm, setNewForm] = useState({
        name: "",
        artist: "",
        album: "",
        time: "",
        is_favorite: true
    })
    const [checked, setChecked] = useState(false)

    function handleSubmit(e) {
        e.preventDefault()

        axios.post(`${API}/songs`, newForm)
        .then(() => navigate("/songs"))
        .catch(err => console.log(err)) 
    }

    return (
        <div className="new center-page background-image">
            <aside className="form-aside">
                <h2>Add New Song</h2>
                <Link to = {`/songs`}>
                    <img src = {back} alt="back-button" />
                </Link>
            </aside>
            
            <Form
            submitFunction={handleSubmit}
            stateVar={newForm}
            setFunction={setNewForm}
            checkboxVar = {checked}
            checkboxFunction = {setChecked} 
            />     
        </div>
    );
}

export default SongsNewForm;