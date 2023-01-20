import { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ContextData } from "./Provider";
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
        <div className="index">
            <h1>Songs</h1>
            {
                songs.length > 0 &&
                songs.map(({name, artist, album, id}) => 
                    <div className="song" key = {id}>
                        <Link to = {`/songs/${id}`}><h3>{name}</h3></Link>
                        <p>{artist}</p>
                        <p>{album}</p>
                    </div>
                )
            }
        </div>
    );
}

export default SongsIndex;