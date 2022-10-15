const initialState = {
    loading: false,
    errorMessage: '',
    users : [],
    usersCount: 0
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case "SET_LOADING":
            return {...state, loading: action.payload} 
        case "SET_ERROR_MESSAGE":
            return {...state, errorMessage: action.payload} 
        case "SET_USER_DATA":
            return {...state, users: action.payload} 
        case "SET_USER_COUNT":
            return{...state, usersCount: action.payload} 
        default:
            return state;
    }
}