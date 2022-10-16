const initialState = {
    loading: false,
    errorMessage: '',
    successMessage: '',
    users : [],
    usersCount: 0,
    tournaments: [],
    leaderBoards: []
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
        case "SET_TOURNAMENT_DATA":
            return{...state, tournaments: action.payload} 
        case "SET_LEADERBOARD_DATA":
            return{...state, leaderBoards: action.payload} 
        default:
            return state;
    }
}