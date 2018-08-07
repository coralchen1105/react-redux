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
import Header from "./common/Header";
import { connect } from "react-redux";
import PropTypes from "prop-types";

// pass initial state from api or DB
// dispatch an action to the store, return object of dispatched action
// in the ManageCoursePage component it will have the new of course state and authors state
// Dispatch actions to load initial state.
// thunk to return function (loadCourses() from action)
const store = configureStore();
store.dispatch(loadCourses());
store.dispatch(loadAuthors());

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router className="App">
          <div>
            <Header loading={this.props.loading} />
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

App.propTypes = {
  loading: PropTypes.bool.isRequired,
  match: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    loading: state.ajaxCallsInProgress > 0
  };
}

export default connect(mapStateToProps)(App);
