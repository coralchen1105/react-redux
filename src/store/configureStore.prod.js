import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers";
import thunk from "redux-thunk";

// initialState is optionally specify to hydrate the state, or restore a previously serialize user session
// good way to initialize your store with some data like: server side data
// use as the entry point of the application
// the third parameter is for using middleware

export default function configureStore(initialState) {
  return createStore(rootReducer, initialState, applyMiddleware(thunk));
}

//the middleware can interpret actions differently,
//and provide support for dispatching async actions.
//Async actions are usually asynchronous primitives like Promises, Observables, or thunks.
