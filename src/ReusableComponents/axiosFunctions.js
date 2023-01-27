
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



export {
    getData,
    createData,
    editData,
}

