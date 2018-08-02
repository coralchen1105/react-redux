import * as types from "../actions/actionTypes";
import initialState from "./initialState";

// get from action with data from api (action dispatch: action type and action data from api)
// reducer is to returns the next state tree
// get the new state of the component
export default function authors(state = initialState.authors, action) {
  switch (action.type) {
    case types.LOAD_AUTHORS_SUCCESS:
      return action.authors;

    default:
      return state;
  }
}
