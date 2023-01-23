import { useContextProvider } from "../Components/Provider";
import { IconCheckbox } from "react-icon-checkbox"
import { IconContext } from "react-icons";
import {FaStar} from 'react-icons/fa'
import {TbStarOff} from 'react-icons/tb'

function CheckboxInput({idValue, value, stateVar, checkboxVar, checkboxFunction}) {
    const {API, axios} = useContextProvider()

    function handleCheckbox () {
        checkboxFunction(!checkboxVar)
        stateVar[value] = !checkboxVar
        // functionality to update the is_favorite value where ever the checkbox is outside of a form
        if(idValue){
            axios.put(`${API}/songs/${idValue}`, {...stateVar, [value]: !checkboxVar})
            .then(()=> alert(`${stateVar.name}'s favorite status has been changed.`))
            .catch(err => console.log(err))
        }
    }

    return (
        <label htmlFor={value}>Favorite? <br/>
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