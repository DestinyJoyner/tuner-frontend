import { Link } from "react-router-dom";
import DeleteIcon from "./DeleteIcon";


function AlbumSongs({songs, stateVar, setFunction}) {
    const {name, time, id} = songs
    
    // function deleteSong (idValue) {
    //     deleteData("songs",idValue)
    //     // update albumSongs data on component
    //     const newAlbumSongs = albumSongs.filter(({id}) => idValue !== id)
    //     setAlbumSongs(newAlbumSongs)
    // }

    return (
         <li key={id}>
            <Link to={`/songs/${id}`}>
                <span>{name}</span>
            </Link>
            <span>{time}</span>
            <DeleteIcon
            idValue = {id}
            stateVar= {stateVar}
            setFunction ={setFunction} 
            size ={"20px"}
            color ={"#A57D02"}
            />
            {/* <span
            className="cursor"
            onClick={() => deleteSong(id)}>
            <MdDeleteForever size = {"20px"} color={"#A57D02"} />
            </span> */}
        </li> 
    );
}

export default AlbumSongs;