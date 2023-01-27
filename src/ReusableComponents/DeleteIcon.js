import { deleteData } from "./axiosFunctions";
import { MdDeleteForever } from "react-icons/md"

function DeleteIcon({idValue, stateVar, setFunction, size, color}) {
    console.log(stateVar)

    function deleteSong () {
        deleteData("songs", idValue)
        // update albumSongs data on component
        const newAlbumSongs = stateVar.filter(({id}) => idValue !== id)
        setFunction(newAlbumSongs)
    }


    return (
        <span
        className="cursor"
        onClick={() => deleteSong()}>
            <MdDeleteForever size = {size} color={color} />
        </span>
    );
}

export default DeleteIcon;