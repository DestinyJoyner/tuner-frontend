import { useState, useEffect, } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useContextProvider } from "./Provider";
import Form from "../ReusableComponents/Form";

function SongsEditForm() {
    const {API, axios} = useContextProvider()
    const {id} = useParams()
    const navigate = useNavigate()
    const [editForm, setEditForm] = useState({})

    function handleSubmit(e) {
       e.preventDefault()
       
       axios.put(`${API}/songs/${id}`, editForm)
       .then(() => navigate(`/songs/${id}`)
       .catch(err => console.log(err))) 
    }

    useEffect(() => {
        axios.get(`${API}/songs/${id}`)
        .then(respJson => setEditForm(respJson.data))
        .catch(err => console.log(err))
    }, [id])

    return (
        <div className="edit">
            <h2>Edit Form</h2>
            <Form 
            submitFunction={handleSubmit}
            stateVar={editForm}
            setFunction={setEditForm} /> 
        </div>
    );
}

export default SongsEditForm;