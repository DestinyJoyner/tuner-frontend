import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useContextProvider } from "./Provider";
import "./AlbumsShowPage.css"
    
function AlbumsShowPage() {
    const {API, axios} = useContextProvider()
    const {id} = useParams()
    const [thisAlbum, setThisAlbum] = useState({})
    const [albumSongs, setAlbumSongs] = useState([])

        useEffect(() => {
            axios.get(`${API}/albums/${id}`)
            .then(respJson => setThisAlbum(respJson.data))
            .catch(err=> console.log(err))

            axios.get(`${API}/albums/${id}/songs`)
            .then(respJson => setAlbumSongs(respJson.data))
            .catch(err => console.log(err))
        },[])

    return (
        <div className='albumShow center-page'>
            <h1>Album Show Page</h1>
        </div>
    );
}

export default AlbumsShowPage;