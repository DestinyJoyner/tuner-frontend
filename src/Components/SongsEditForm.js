import { useState, useEffect, } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useContextProvider } from "./Provider";
import Form from "../ReusableComponents/Form";
import "./SongsEditForm.css"

function SongsEditForm() {
    const {API, axios} = useContextProvider()
    const {id} = useParams()
    const navigate = useNavigate()
    const [editForm, setEditForm] = useState({})
    const [checked, setChecked] =useState(false)

    function handleSubmit(e) {
       e.preventDefault()
       
       axios.put(`${API}/songs/${id}`, editForm)
       .then(() => navigate(`/songs/${id}`)
       .catch(err => console.log(err))) 
    }

    useEffect(() => {
        axios.get(`${API}/songs/${id}`)
        .then(respJson => {
            setEditForm(respJson.data)
            setChecked(respJson.data.is_favorite)
        })
        .catch(err => console.log(err))
    }, [id])

    return (
        <div className="edit center-page">
            <aside className="form-aside">
                <h2>Edit Song Info</h2>
                <p>Back Button</p>
            </aside>
            
            <Form 
            submitFunction={handleSubmit}
            stateVar={editForm}
            setFunction={setEditForm}
            checkboxVar = {checked}
            checkboxFunction = {setChecked}  /> 
        </div>
    );
}

export default SongsEditForm;