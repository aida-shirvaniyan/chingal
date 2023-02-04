import axios from "axios";

const fetchRequest = () => {
    return {type: "FETCH_REQUEST"}
}
const fetchSuccess = (users) => {
    return {type: "FETCH_SUCCESS", payload: users}
}
const fetchFailure = (error) => {
    return {type: "FETCH_FAILURE", payload: error}
}

export const fetchApi = () => {
    return (dispatch) => {
        dispatch(fetchRequest());
        axios.get("/users")
            .then(response => {
                const users = response.data;
                dispatch(fetchSuccess(users));
                console.log(response)
            })
            .catch(error =>{
                const errorMessage = error;
                dispatch(fetchFailure(errorMessage))
            })
    }
}
