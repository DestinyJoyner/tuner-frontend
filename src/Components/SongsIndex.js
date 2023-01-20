import { useContext, useState, useEffect } from "react";
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
                songs.map(({name, artist, album}) => 
                    <div className="song">
                        <h3>{name}</h3>
                        <p>{artist}</p>
                        <p>{album}</p>
                    </div>
                )
            }
        </div>
    );
}

export default SongsIndex;