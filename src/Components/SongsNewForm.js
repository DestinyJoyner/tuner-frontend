import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContextProvider } from "./Provider";
import Form from "../ReusableComponents/Form";

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

    function handleSubmit(e) {
        e.preventDefault()

        axios.post(`${API}/songs`, newForm)
        .then(() => navigate("/songs"))
        .catch(err => console.log(err)) 
    }

    return (
        <div className="new">
            <h2>New Song Form</h2>
            <Form
            submitFunction={handleSubmit}
            stateVar={newForm}
            setFunction={setNewForm} 
            />     
        </div>
    );
}

export default SongsNewForm;