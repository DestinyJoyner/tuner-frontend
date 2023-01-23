import { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ContextData } from "./Provider";
import CheckboxInput from "../ReusableComponents/CheckboxInput";
import "./SongsShow.css"

function SongsShow() {
    const {API, axios} = useContext(ContextData)
    const {id} = useParams()
    const [thisSong, setThisSong] = useState({})
    const [favorite, setFavorite] = useState(false)

    useEffect(() => {
        axios.get(`${API}/songs/${id}`)
        .then(respJson => {
            setThisSong(respJson.data)
            setFavorite(respJson.data.is_favorite)
        })
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
                <CheckboxInput 
                idValue={id}
                value = {"is_favorite"}
                stateVar = {thisSong}
                checkboxVar = {favorite}
                checkboxFunction = {setFavorite}/>
                </>
            }
        </div>
    );
}

export default SongsShow;