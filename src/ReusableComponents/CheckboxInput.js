import { useContextProvider } from "../Components/Provider";
import { IconCheckbox } from "react-icon-checkbox"
import { IconContext } from "react-icons";
import {FaStar} from 'react-icons/fa'
import {TbStarOff} from 'react-icons/tb'

function CheckboxInput({idValue, value, stateVar, checkboxVar, checkboxFunction, iconSize}) {
    const {API, axios} = useContextProvider()

    function handleCheckbox () {
        checkboxFunction(!checkboxVar)
        stateVar[value] = !checkboxVar
        // functionality to update the is_favorite value where ever the checkbox is outside of a form
        if(idValue){
            axios.put(`${API}/songs/${idValue}`, {...stateVar, [value]: !checkboxVar})
            .then(()=> {})
            .catch(err => console.log(err))
        }
    }

    return (
        <IconCheckbox 
        type = "checkbox"
        id = {value}
        checked = {checkboxVar}
        checkedIcon={
            <IconContext.Provider value={{color: "gold", size:`${iconSize}`}}>
                <FaStar />
            </IconContext.Provider>}
        uncheckedIcon={
            <IconContext.Provider value={{color: "white", size:`${iconSize}`}}>
                <TbStarOff />
            </IconContext.Provider>}
        onClick={() => handleCheckbox()}
        />
    );
}

export default CheckboxInput;