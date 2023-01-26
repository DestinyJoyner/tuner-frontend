import { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ContextData } from "./Provider";
import dj from "../assets/dj-green.png"
import "./SongsIndex.css"

function SongsIndex() {
    const { API, axios} = useContext(ContextData)
    const [songs, setSongs] = useState([])


    useEffect(() => {
        axios.get(`${API}/songs`)
        .then(respJson => setSongs(respJson.data))
        .catch(err => console.log(err))
    }, [])

    return (
        <div className="index center-page">
            <section className="index-top-header">
                <img src ={dj} alt="dj" />
                <h1>SONGS</h1>
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