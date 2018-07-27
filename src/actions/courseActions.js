// action creator, the type property specifies the action's type, and return an action
// the only requirement of an action is that it has a type property
import courseApi from "../api/mockCourseApi";
import * as types from "./actionTypes";

export function loadCourseSuccess(courses) {
  //debugger;
  return { type: types.LOAD_COURSES_SUCCESS, courses };
}

// reducer is just a function that accepts a state and an action and then returns a new state
// get data from api and the data dispatch to action function: dispatch(loadCourseSuccess(courses))
export function loadCourses() {
  return function(dispatch) {
    return courseApi
      .getAllCourses()
      .then(courses => {
        dispatch(loadCourseSuccess(courses));
      })
      .catch(error => {
        throw error;
      });
  };
}
