import { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ContextData } from "./Provider";
import "./SongsShow.css"

function SongsShow() {
    const {API, axios} = useContext(ContextData)
    const {id} = useParams()
    const [thisSong, setThisSong] = useState({})

    useEffect(() => {
        axios.get(`${API}/songs/${id}`)
        .then(respJson => setThisSong(respJson.data))
        .catch(err => console.log(err))
    },[id])


    return (
        <div className='show'>
            {
                thisSong.id && 
                <>
                <h2>{thisSong.name}</h2>
                <p>{thisSong.artist}</p>
                <p>{thisSong.album}</p>
                <p>{thisSong.time}</p>
                <p>{thisSong.is_favorite ? 'favorite' : 'not a favorite'}</p>
                </>
            }
        </div>
    );
}

export default SongsShow;