import * as types from "../actions/actionTypes";
import initialState from "./initialState";

// state = []: inital empty state array for coping and get the action data from courseActions file
export default function courseReducer(state = initialState.courses, action) {
  // state is immutable
  switch (action.type) {
    case types.LOAD_COURSES_SUCCESS:
      //debugger;
      // spread operator: state array spreading containing all inline data
      // Object.assgin is use to copy action data to new object
      // pass action.course data to state array which is empty
      // return [...state, Object.assign({}, action.course)];
      return action.courses;
    default:
      return state;
  }
}
