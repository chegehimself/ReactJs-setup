const initialState = {
  data: {},
  errors: {},
};

export default function signup(state = initialState, action = {}){
  switch (action.type) {
    case 'SIGNUP_SUCCESS': {
      return { ...state, data: action.payload };
    }
    case "SIGNUP_ERROR": {
      return { ...state, errors: action.payload };
    }
    default:
      return state;
  }
}