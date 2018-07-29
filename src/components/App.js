import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import HomePage from "./home/HomePage";
import CoursesPage from "./course/CoursesPage";
import AboutPage from "./about/AboutPage";
import ManageCoursePage from "./course/ManageCoursePage";
import configureStore from "../store/configureStore";
import { Provider } from "react-redux";
import { loadCourses } from "../actions/courseActions";
import { loadAuthors } from "../actions/authorActions";

// pass initial state from api or DB
// dispatch an action to the store
const store = configureStore();
store.dispatch(loadCourses());
store.dispatch(loadAuthors());

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router className="App">
          <div>
            <nav className="navbar navbar-default">
              <div className="container-fluid">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/courses">Courses</Link>
              </div>
            </nav>
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route path="/courses" component={CoursesPage} />
              <Route path="/course/:id" component={ManageCoursePage} />
              <Route path="/course" component={ManageCoursePage} exact />
              <Route path="/about" component={AboutPage} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
