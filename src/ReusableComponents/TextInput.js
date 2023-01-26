import { handleTextInput } from "./helperFunctions";

function TextInput({title, value, stateVar, setFunction, read}) {
    return (
        <label htmlFor={value}>{title}: {" "}
            <input
            type = "text"
            readOnly = {read}
            id = {value}
            value = {stateVar[value]}
            onChange = {(event) => handleTextInput(event, stateVar, setFunction)}
             />
        </label>
    );
}

export default TextInput;