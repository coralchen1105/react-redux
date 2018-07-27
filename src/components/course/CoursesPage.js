import React from "react";
import { connect } from "react-redux";
import * as courseActions from "../../actions/courseActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import CourseList from "./CourseList";

// container component
class CoursesPage extends React.Component {
  // initialize state and call our bind functions
  constructor(props, context) {
    super(props, context);
    // this.state = {
    //   course: { title: "" }
    // };

    // // first this is from this class, the second bind(this) is to bind this component
    // this.onTitleChange = this.onTitleChange.bind(this);
    // this.onClickSave = this.onClickSave.bind(this);
  }

  // // child functions
  // onTitleChange(event) {
  //   // this.state.course: this refers to the component property, as this local function change this component state, so needs to bind together
  //   const course = this.state.course;
  //   course.title = event.target.value;
  //   this.setState({ course: course });
  // }

  courseRow(course, index) {
    return <div key={index}>{course.title}</div>;
  }

  // render function
  render() {
    //debugger;
    const { courses } = this.props;
    return (
      <div>
        <h1>Course</h1>
        <CourseList courses={courses} />
      </div>
    );
  }
}

CoursesPage.propTypes = {
  courses: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

// parameter state is from rootReducer state data (courseReducer), ownProps is this component own data
// pass the state data to component props data
function mapStateToProps(state, ownProps) {
  //debugger;
  return { courses: state.courses };
}

// trigger action file (courseActions.js)
function mapDispatchToProps(dispatch) {
  // creating creatCourse function to this component props function list using action function
  // course parameter is from when onClickSave() parameter: this.state.course
  // this.props.createCourse(this.state.course) trigger reducer and retun to this dispatch function and pass the function to component prop
  return {
    actions: bindActionCreators(courseActions, dispatch)
  };
}

// conncet() function to add new props to this component, a second argument, and add our action creator as props. Then we can reference this action creator as a prop to call it from our component
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CoursesPage);
// mapDispatchToProps determines what actions are available to this component
// once use mapDispatchToProps the propTypes will not need dispatch as proptype anymore as use in parameter
// data flow: from state to props
