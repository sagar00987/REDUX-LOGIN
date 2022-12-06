const initialState = {
  token :'', 
};

export default function loginReducer(state = initialState, action) {
  switch (action.type) {
    case 'USER_LOGIN':
      return {
        ...state,
        token: action.payload,
      };

    case "ERROR_LOGIN":
      return {
        ...state,
        token: '',
      };

    default:
      return state;
  }
}
