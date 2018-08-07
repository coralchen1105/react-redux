import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as courseActions from "../../actions/courseActions";
import CourseForm from "./courseForm";

class ManageCoursePage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      course: Object.assign({}, this.props.course),
      errors: {},
      saving: false
    };
    this.updateCourseState = this.updateCourseState.bind(this);
    this.saveCourse = this.saveCourse.bind(this);
  }

  static getDerivedStateFromProps(props, state) {
    if (props.course.id != state.course.id) {
      // Necessary to populate form when existing course is loaded directly.
      return props.course;
    }
    return null;
  }

  // create new course state from user input
  updateCourseState(event) {
    const field = event.target.name;
    // Fix: Clone state to avoid manipulating below.
    let course = Object.assign({}, this.state.course);
    course[field] = event.target.value;
    return this.setState({ course: course });
  }

  saveCourse(event) {
    event.preventDefault();
    this.setState({ saving: true });
    // call action function saveCourse()
    this.props.actions
      .saveCourse(this.state.course)
      .then(() => this.redirect());
    this.props.history.push("/courses");
  }

  redirect() {}
  render() {
    return (
      <div>
        <h1>Course Manage Page</h1>
        <CourseForm
          allAuthors={this.props.authors}
          course={this.state.course}
          errors={this.state.errors}
          onChange={this.updateCourseState}
          onSave={this.saveCourse}
        />
      </div>
    );
  }
}

ManageCoursePage.propTypes = {
  course: PropTypes.object.isRequired,
  authors: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};

function getCourseById(courses, id) {
  // filter the course if the id is matched and return array
  const course = courses.filter(course => course.id == id);
  if (course) return course[0]; //since filter returns an array, have to grab the first.
  return null;
}

// map state to particular component to use data for this component
// this component state data is all courses data from app.js store loading
// if courseId existed in the courses data (state), then get it and load to props course
// if id not existed that means to create new course data (in this component state) and pass to props
function mapStateToProps(state, ownProps) {
  const courseId = ownProps.match.params.id; // from the path "/course/:id" declear the placeholder in app.js

  // props array
  let course = {
    id: "",
    watchHref: "",
    title: "",
    authorId: "",
    length: "",
    category: ""
  };

  if (courseId && state.courses.length > 0) {
    course = getCourseById(state.courses, courseId);
  }

  const authorsFormattedForDropdown = state.authors.map(author => {
    return {
      value: author.id,
      text: author.firstName + " " + author.lastName
    };
  });

  return {
    course: course,
    authors: authorsFormattedForDropdown
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ManageCoursePage);

// state in this component:
//course: updateCourseState(event) to create new state
//courses: load from app.js store
// props: only have one course state to map to props
// if param.match.id exist, get that course data and pass to props
// after loading existing course data to props, static getDerivedStateFromProps(props, state)
// will load the data from props.course
// if id not existed, then use updateCourseState(event) to create new state and pass to props

// To summary: props course data is either from user input state or matching id from store course data
