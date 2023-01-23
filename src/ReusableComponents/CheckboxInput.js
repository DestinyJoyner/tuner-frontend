import { IconCheckbox } from "react-icon-checkbox"
import { IconContext } from "react-icons";
import {FaStar} from 'react-icons/fa'
import {TbStarOff} from 'react-icons/tb'

function CheckboxInput({value, stateVar, checkboxVar, checkboxFunction}) {
    function handleCheckbox () {
        checkboxFunction(!checkboxVar)
        stateVar[value] = !checkboxVar
    }

    return (
        <label htmlFor={value}>Favorite?: {" "}
            <IconCheckbox 
            type = "checkbox"
            id = {value}
            checked = {checkboxVar}
            checkedIcon={
                <IconContext.Provider value={{color: "gold", size: "50px"}}>
                    <FaStar />
                </IconContext.Provider>}
            uncheckedIcon={
                <IconContext.Provider value={{color: "black", size: "50px"}}>
                    <TbStarOff />
                </IconContext.Provider>}
            onClick={() => handleCheckbox()}
            />
        </label>
    );
}

export default CheckboxInput;