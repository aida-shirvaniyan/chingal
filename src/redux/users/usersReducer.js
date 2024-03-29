const initialState = {
    loading:false,
    users:[],
    error:''
}
const UserReducer = (state=initialState , action) => {
    switch (action.type){
        case "FETCH_REQUEST":
            return{
                ...state,
                loading: true
            }
        case "FETCH_SUCCESS":
            return {
                users : action.payload,
                loading: false
            }
        case "FETCH_FAILURE":
            return {
                error: action.payload,
                loading: false,
            }
        default:return state
    }
}

export default UserReducer;