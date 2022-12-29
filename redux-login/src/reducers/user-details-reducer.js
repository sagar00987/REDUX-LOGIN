const initialState = {
    userList: [],
    loading: true,
    error: false,
};


export default function userDetailsReducer(state = initialState, action) {

    switch (action.type) {
        case 'LOAD_USERS':
            console.log('Load Login', state);
            return { ...state, userList: [], error: false, loading: true }

        case 'GET_USERS':
            console.log('Load Login', state);
            return { ...state, userList: action.payload, error: false, loading: false }

        case 'ERROR_USERS':
            console.log('Load Login', state);
            return { ...state, userList: [], error: true, loading: false }

        case 'DELETE_USER':
            console.log('Load Login', state);
            return { ...state, userList: [], error: true, loading: false }

        case 'UPDATE_USER':
            console.log('Load Login', state);
            return { ...state, userList: [], error: true, loading: false }

        default:
            return state;
    }
};