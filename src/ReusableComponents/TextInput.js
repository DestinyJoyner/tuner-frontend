import { handleTextInput } from "./helperFunctions";

function TextInput({title, value, stateVar, setFunction}) {
    return (
        <label htmlFor={value}>{title}: {" "}
            <input
            type = "text"
            id = {value}
            value = {stateVar[value]}
            onChange = {(event) => handleTextInput(event, stateVar, setFunction)}
             />
        </label>
    );
}

export default TextInput;