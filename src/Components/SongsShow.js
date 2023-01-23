import { useContext, useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ContextData } from "./Provider";
import CheckboxInput from "../ReusableComponents/CheckboxInput";
import { GrEdit } from "react-icons/gr"
import { MdDeleteForever } from "react-icons/md"
import { AiFillFastBackward } from "react-icons/ai"
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
            <section className="show-buttons">
                <Link to = {`/songs`}>
                    <AiFillFastBackward
                    size={"30px"} />
                </Link>

                <Link to = {`/songs/${id}/edit`}>
                    <GrEdit
                    size ={"30px"} />
                </Link>

                <span
                className="show-delete"
                onClick={() => deletePrompt()}>
                    <MdDeleteForever size = {"36px"} />
                </span>
            </section>
        </div>
    );
}

export default SongsShow;