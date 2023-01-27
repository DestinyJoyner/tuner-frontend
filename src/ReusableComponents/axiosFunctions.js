import axios from "axios";
const API = process.env.REACT_APP_API_URL

// GET function
function getData(endpoint, setFunction, idValue=false) {
    if(idValue){
        axios.get(`${API}/${endpoint}/${idValue}`)
        .then(({data}) => setFunction(data))
        .catch(err => console.log(err))
    }
    else{
        axios.get(`${API}/${endpoint}`)
        .then(({data}) => setFunction(data))
        .catch(err => console.log(err))
    }
}

// merged table data
function getData2(endpoint1, endpoint2, idValue, setFunction) {
    axios.get(`${API}/${endpoint1}/${idValue}/${endpoint2}`)
    .then(({data}) => setFunction(data))
    .catch(err => console.log(err))
}

// POST Route
function createData(endpoint, navigate, obj, idValue=false) {
    axios.post(`${API}/${endpoint}`, obj)
    .then(() =>navigate("/songs"))
    .catch(err => console.log(err))
}

// UPDATE ROUTE
function editData(endpoint, navigate, idValue) {
    axios.put(`${API}/${endpoint}/${idValue}`)
    .then(() => navigate(`/${endpoint}/${idValue}`))
    .catch(err => console.log(err))
}

// DELETE ROUTE
function deleteData(endpoint, idValue) {
    axios.delete(`${API}/${endpoint}/${idValue}`)
    .then(() => {})
    .catch(err => console.log(err))
}



export {
    getData,
    getData2,
    createData,
    editData,
    deleteData,
}

