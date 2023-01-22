import TextInput from "./TextInput";

function Form({submitFunction, stateVar, setFunction}) {

    return (
       <form
       className='form'
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
        
        <input 
        className="submitButtton"
        type="submit" />

       </form>
    );
}

export default Form;