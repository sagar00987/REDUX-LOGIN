const initialState = {
  token: null,
  loading: true,
  error: false,
};


export default function loginReducer(state = initialState, action) {

  switch (action.type) {
    case 'LOAD_LOGIN':
        console.log('Load Login', state);
        return { ...state, token: null, error: false, loading: true }

    case 'Success_Login':
        console.log('Success_Login', state);
        return { ...state, token: action.payload, error: false, loading: false }

    case 'ERROR_LOGIN':
        console.log('ERROR_LOGIN', state);
        return { ...state, token: [], error: true, loading: false }

    default:
        return state;
}
};
