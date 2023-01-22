
function handleTextInput(e, stateVar, setFunction) {
    const value = e.target.value
    const id = e.target.id
    setFunction({...stateVar, [id]: value})
}


export {
    handleTextInput,
}