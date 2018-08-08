// action creator, the type property specifies the action's type, and return an action
// the only requirement of an action is that it has a type property
import courseApi from "../api/mockCourseApi";
import * as types from "./actionTypes";
import { beginAjaxCall, ajaxCallError } from "./ajaxStatusAction";

export function loadCourseSuccess(courses) {
  //debugger;
  return { type: types.LOAD_COURSES_SUCCESS, courses };
}

export function createCourseSuccess(course) {
  return { type: types.CREATE_COURSE_SUCCESS, course };
}

export function updateCourseSuccess(course) {
  return { type: types.UPDATE_COURSE_SUCCESS, course };
}

// Functions below handle asynchronous calls.
// Each returns a function that accepts a dispatch.
// These are used by redux-thunk to support asynchronous interactions.
// reducer is just a function that accepts a state and an action and then returns a new state
// get data from api and the data dispatch to action function: dispatch(loadCourseSuccess(courses))
export function loadCourses() {
  return function(dispatch) {
    // dispatch ajax call action as well
    dispatch(beginAjaxCall);
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

// create course or update course
// CourseApi.saveCourse(course) return result as .then(savedCourse => {})
export function saveCourse(course) {
  return function(dispatch, getState) {
    dispatch(beginAjaxCall);
    return courseApi
      .saveCourse(course) // return course as arguement to .then(saveCourse)
      .then(savedCourse => {
        course.id
          ? dispatch(updateCourseSuccess(savedCourse))
          : dispatch(createCourseSuccess(savedCourse));
      })
      .catch(error => {
        dispatch(ajaxCallError(error));
        throw error;
      });
  };
}
