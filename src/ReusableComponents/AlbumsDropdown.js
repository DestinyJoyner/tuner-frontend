import { useContextProvider } from "../Components/Provider";
import { handleTextInput } from "./helperFunctions";


function AlbumsDropdown({value, stateVar, setFunction, albums}) {
    const {setAlbumId} = useContextProvider()

    function handleDropdown (event, stateVar, setFunction) {
        handleTextInput(event, stateVar, setFunction)
        const album = albums.find(({album_name}) => event.target.value === album_name )
        if(album) setAlbumId(album.id)
    }

    return (
        <label htmlFor={value}>Album: {" "}
            <input 
            list="datalist"
            id={value}
            type="text"
            value={stateVar[value]}
            onChange={(event) =>handleDropdown(event, stateVar, setFunction)}/>

            <datalist id ="datalist">
                <option value="">Select An Album</option>
                {
                    albums.map(({album_name, id}) =>
                        <option
                        key ={id} 
                        value={album_name}
                        />
                        )
                }
            
            </datalist>

        </label>
      
    );
}

export default AlbumsDropdown;