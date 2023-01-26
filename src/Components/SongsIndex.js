import { useContext, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ContextData } from "./Provider";
import dj from "../assets/dj-green.png"
import "./SongsIndex.css"

function SongsIndex() {
    const { API, axios} = useContext(ContextData)
    const navigate = useNavigate()
    const [songs, setSongs] = useState([])

    function getFavorites() {
        axios.get(`${API}/songs?is_favorite=true`)
        .then(respJson => setSongs(respJson.data))
        .catch(err => navigate("/*"))
    }

    function getAll() {
        axios.get(`${API}/songs`)
        .then(respJson => setSongs(respJson.data))
        .catch(err => navigate("/*"))
    }

    useEffect(() => {
       getAll()
    }, [])

    return (
        <div className="index center-page">
            <section className="index-top-header">
                <img src ={dj} alt="dj" />
                <button
                className="show-all cursor"
                onClick={() => getAll()}
                >All</button>
                <h1>SONGS</h1>
                <button
                className="show-favorites cursor"
                onClick={() => getFavorites()}
                >Favorites</button>
                <img src ={dj} alt="dj" />
            </section>
        
            <div className="song-headers">
                <h3>Title</h3>
                <h3>Artist</h3>
                <h3>Album</h3>
            </div>
            {
                songs.length > 0 &&
                songs.map(({name, artist, album, album_id, id}) => 
                    <div className="song" key = {id}>
                        <Link to = {`/songs/${id}`}><h3>"{name}"</h3></Link>
                        <p>{artist}</p>
                        <Link to={`/albums/${album_id}`}><p>{album}</p></Link>
                    </div>
                )
            }
        </div>
    );
}

export default SongsIndex;