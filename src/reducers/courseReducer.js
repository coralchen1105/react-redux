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
    case types.CREATE_COURSE_SUCCESS:
      return [...state, Object.assign({}, action.course)];

    case types.UPDATE_COURSE_SUCCESS:
      return [
        ...state.filter(course => course.id !== action.course.id),
        Object.assign({}, action.course)
      ];
    default:
      return state;
  }
}

//copy course data to course state of the component
