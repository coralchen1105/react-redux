1.  add eslint: create.eslintrc file and set npm script to run lint command. Using eslint to check syntax error.
2.  use webpack to bundle js and output as one bundle.js file. Run the webpack from server side file: srcServer.js, compile webpack here
    ToDo: learn webpack config

3.  “asynchronous non-blocking I/O model”: What that means is that while the execution of JavaScript is blocking, I/O operations are not. I/O operations can be fetching data over the internet with Ajax or over WebSocket connections, querying data from a database such as MongoDB or accessing the filesystem with the NodeJs “fs” module. All these kind of operations are done in parallel to the execution of your code and it is not JavaScript that does these operations; to put it simply, the underlying engine does it. callback put to node engine

4.  redux async librarys: redux-thunk, redux-promise, redux-saga
    thunk:return function, is a function that wraps an expression in order to delay its evaluation

5.  e.g. className={wrapperClass}, {} is reference to the component props
6.  ctrl +p : shoutcut for find file
7.  author data pass from api to frontend (author data is from api, not user input):
    a. setup initial state file and dispatch to configurateStore with reducers and state,
    b. get initial state data from all reducers (authorReducer),
    c. action file get the data from api and dispatch with action type then pass to reducers,
    d. reducer file is the copy the action data to initial state array and export the new state to configureStore
    e. store connect reducers and app.js to dispatch actions with store, so all three data flow connect together
    f. after all calling the component state from app.js will be initialized (copied from action file) and can used directly in children component.
8.  thunk: allows you to write action creators that return a function instead of an action. The thunk can be used to delay the dispatch of an action, or to dispatch only if a certain condition is met. The inner function receives the store methods dispatch and getState as parameters.
9.  And check the app component state and props, go through all the data flow
