import CONSTANTS from "../constants/index";

const { FETCH_HOME } = CONSTANTS;

export default function home(state = {}, action = {}){
  switch (action.type) {
    case FETCH_HOME: {
      return { state, data: action.payload };
    }
    case "ERROR_ACTION": {
      return { state, errors: action.payload };
    }
    default:
      return state;
  }
}