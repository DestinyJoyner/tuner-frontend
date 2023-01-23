import { useContext, useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ContextData } from "./Provider";
import CheckboxInput from "../ReusableComponents/CheckboxInput";
import { TiEdit } from "react-icons/ti"
import { MdDeleteForever } from "react-icons/md"
import { AiFillFastBackward, AiFillFastForward } from "react-icons/ai"
import musicFreq from "../assets/music-freq.png"
import playSong from "../assets/play-song-pic.png"
import "./SongsShow.css"

function SongsShow() {
    const {API, axios} = useContext(ContextData)
    const {id} = useParams()
    const [thisSong, setThisSong] = useState({})
    const [favorite, setFavorite] = useState(false)

    function deletePrompt() {
        // temp for now
        alert(`delete?`)
    }

    useEffect(() => {
        axios.get(`${API}/songs/${id}`)
        .then(respJson => {
            setThisSong(respJson.data)
            setFavorite(respJson.data.is_favorite)
        })
        .catch(err => console.log(err))
    },[id])

    return (
        <div className='show center-page'>
           
            <div className="show-screen center-page">
                <h2 className="scroll-text">
                    <span>{thisSong.name}</span>
                </h2>
                <img src ={playSong} alt="songPic" />
                <p>{thisSong.artist}</p>
                <p>{thisSong.album}</p>
            </div>

            <img src={musicFreq} alt="frequency" />
            <hr/>
            <p>{thisSong.time}</p>
            <CheckboxInput 
            idValue={id}
            value = {"is_favorite"}
            stateVar = {thisSong}
            checkboxVar = {favorite}
            checkboxFunction = {setFavorite}
            iconSize = {"5px"}
            />
            <section className="show-buttons">
                <Link to = {`/songs`}>
                    <AiFillFastBackward
                    size={"30px"}
                    color={"white"} />
                </Link>

                <Link to = {`/songs/${id}/edit`}>
                    <TiEdit
                    size ={"40px"}
                    color= {"white"} />
                </Link>

                <AiFillFastForward
                size={"30px"}
                color={"white"} />
            </section>

            <span
                className="show-delete"
                onClick={() => deletePrompt()}>
                    <MdDeleteForever size = {"30px"} />
            </span>
            
        </div>
    );
}

export default SongsShow;