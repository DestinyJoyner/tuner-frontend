import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useContextProvider } from "./Provider";
import { getData, createData } from "../ReusableComponents/axiosFunctions";
import Form from "../ReusableComponents/Form";
import back from "../assets/music-back-new.png"
import "./SongsNewForm.css"

function SongsNewForm() {
    const {API, axios, albumId, setAlbumId} = useContextProvider()
    const navigate = useNavigate()
    const [albums, setAlbums] = useState([])
    const [checked, setChecked] = useState(false)
    const [newForm, setNewForm] = useState({
        name: "",
        artist: "",
        album: "",
        time: "",
        is_favorite: false
    })

    // function to create new album and retrieve id if already stored album isn't selected
    async function newAlbum(obj) {
        const dataObj = {
            album_name : obj.album,
            album_artist : obj.artist,
            released : null,
            units_sold: null}
            
        const value = await axios.post(`${API}/albums`, dataObj)
        const {data} = await value
        createData("songs", navigate, {...newForm, ["album_id"]: data.id} )
    }

    function handleSubmit(e) {
        e.preventDefault()       
        if(!albumId){
           newAlbum(newForm)
        }
        else {
            createData("songs",navigate, {...newForm, ["album_id"]: albumId} ) 
            setAlbumId("")
        }
    }
   
    useEffect(() => {
        getData("albums", setAlbums)
    },[])

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
            checkboxIcon={"60px"}
            albums={albums} 
            />     
        </div>
    );
}

export default SongsNewForm;