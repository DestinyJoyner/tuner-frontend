import TextInput from "./TextInput";
import CheckboxInput from "./CheckboxInput";
import "./Form.css"

function Form({submitFunction, stateVar, setFunction, checkboxVar, checkboxFunction}) {

    return (
       <form
       className='form center-page'
       onSubmit={(event) => submitFunction(event)}>

        <TextInput
        title = {"Song Name"}
        value = {"name"}
        stateVar = {stateVar}
        setFunction = {setFunction} />

        <TextInput
        title = {"Artist"}
        value = {"artist"}
        stateVar = {stateVar}
        setFunction = {setFunction}  />

        <TextInput
        title = {"Album"}
        value = {"album"}
        stateVar = {stateVar}
        setFunction = {setFunction}   />

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
        iconSize = {"60px"}
        />
        
        <input 
        className="submitButton cursor"
        type="submit" />

       </form>
    );
}

export default Form;