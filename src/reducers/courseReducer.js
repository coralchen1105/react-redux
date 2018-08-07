import * as types from "../actions/actionTypes";
import initialState from "./initialState";

// IMPORTANT: Note that with Redux, state should NEVER be changed.
// State is considered immutable. Instead,
// create a copy of the state passed and set new values on the copy.
// Note that I'm using Object.assign to create a copy of current state
// and update values on the copy.

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

// pass the state data based on the action type to new state data, ...state means just
// copy the new course into the existing state array, state is already existing when
// the action type of LOAD_COURSES_SUCCESS is trigger

// IMPORTANT NOTE: this state data is static (not initialize from empty array) since
// it accumulate from saveCourse, and loadCourse() will load new state status
