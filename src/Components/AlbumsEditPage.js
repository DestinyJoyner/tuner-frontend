import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useContextProvider } from "./Provider";
import TextInput from "../ReusableComponents/TextInput";


function AlbumsEditPage({albumSetFunction}) {
    const {API, axios} = useContextProvider()
    const {id} = useParams()
    const [editAlbum, setEditAlbum] = useState({})

    function handleSubmit(e) {
        e.preventDefault()
        axios.put(`${API}/albums/${id}`, editAlbum)
        .then(respJson => albumSetFunction(respJson.data))
        .catch(err => console.log(err))
    }

    useEffect(() => {
        axios.get(`${API}/albums/${id}`)
        .then(respJson => setEditAlbum(respJson.data))
        .catch(err => console.log(err))
    },[id])

    return (
        <form onSubmit={(event) =>handleSubmit(event)}>
            <TextInput
            title ={"Album Name"}
            value={"album_name"}
            stateVar={editAlbum}
            setFunction={setEditAlbum} />

            <TextInput
            title ={"Artist"}
            value={"album_artist"}
            stateVar={editAlbum}
            setFunction={setEditAlbum}/>

            <TextInput
            title ={"Released"}
            value={"released"}
            stateVar={editAlbum}
            setFunction={setEditAlbum} />

            <TextInput
            title ={"Albums Sold"}
            value={"units_sold"}
            stateVar={editAlbum}
            setFunction={setEditAlbum}/>

            <input type="submit" />
        </form>
    );
}

export default AlbumsEditPage;