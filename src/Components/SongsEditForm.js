import { useState, useEffect, } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useContextProvider } from "./Provider";
import Form from "../ReusableComponents/Form";
import back from "../assets/music-back-icon.png"
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
       .then(() => navigate(`/songs/${id}`))
       .catch(err => navigate("/*")) 
    }

    useEffect(() => {
        axios.get(`${API}/songs/${id}`)
        .then(respJson => {
            setEditForm(respJson.data)
            setChecked(respJson.data.is_favorite)
        })
        .catch(err => navigate("/*"))
    }, [id])

    return (
        <div className="edit center-page background-image">
            <aside className="form-aside">
                <div className="music-notes"></div>
                <h2>Edit Song Info</h2>
                <Link to = {`/songs/${id}`}>
                    <img src = {back} alt="back-button" />
                </Link>
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