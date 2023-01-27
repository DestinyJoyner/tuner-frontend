import TextInput from "./TextInput";
import CheckboxInput from "./CheckboxInput";
import AlbumsDropdown from "./AlbumsDropdown";
import "./Form.css"

function Form({submitFunction, stateVar, setFunction, checkboxVar, checkboxFunction, checkboxIcon, albums, albumShow}) {

    return (
       <form
       className='form center-page'
       onSubmit={(event) => submitFunction(event)}>

        <TextInput
        title = {"Song Name"}
        value = {"name"}
        stateVar = {stateVar}
        setFunction = {setFunction} />

        {!albumShow &&
        <TextInput
        title = {"Artist"}
        value = {"artist"}
        stateVar = {stateVar}
        setFunction = {setFunction}  />
        }

       {albums &&
        <AlbumsDropdown
        value = {"album"}
        stateVar={stateVar}
        setFunction={setFunction}
        albums={albums} /> || 
        !albumShow &&
        <TextInput 
        title = {"Album"}
        value = {"album"}
        stateVar = {stateVar}
        setFunction = {setFunction} 
        read = {true}
        />
       }

        <TextInput
        title = {"Length"}
        value = {"time"}
        stateVar = {stateVar}
        setFunction = {setFunction}  />

        <CheckboxInput 
        value = {"is_favorite"}
        stateVar = {stateVar}
        checkboxVar = {checkboxVar}
        checkboxFunction = {checkboxFunction}
        iconSize = {checkboxIcon}
        />
        
        <input 
        className="submitButton cursor"
        type="submit" />

       </form>
    );
}

export default Form;