import AuthorApi from "../api/mockAuthorApi";
import * as types from "./actionTypes";
import { beginAjaxCall } from "./ajaxStatusAction";

export function loadAuthorsSuccess(authors) {
  return { type: types.LOAD_AUTHORS_SUCCESS, authors };
}

// call data from api and dispatch to authorAction.js
// authors: data from AuthorApi.getAllAuthors() then pass to authors => {
//dispatch(loadAuthorsSuccess(authors));
export function loadAuthors() {
  return dispatch => {
    dispatch(beginAjaxCall);
    return AuthorApi.getAllAuthors()
      .then(authors => {
        dispatch(loadAuthorsSuccess(authors));
      })
      .catch(error => {
        throw error;
      });
  };
}

// apply of thunk dispatch()
