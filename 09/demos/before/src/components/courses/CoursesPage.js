import React, { useState } from "react";
import { connect } from 'react-redux';
import * as courseActions from '../../redux/actions/courseActions';
import PropTypes from 'prop-types';
// import { bindActionCreators } from 'redux';

const CoursesPage = props => {

  const [course, setCourse] = useState({ title: "" });

  const handleChange = event => {
    const courseCopy = { title: event.target.value };
    setCourse(courseCopy);
  }

  const handleSubmit = event => {
    event.preventDefault();
    props.createCourse(course);
    // props.actions.createCourse(course);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Courses</h2>
      <h3>Add Course</h3>
      <input
        type='text'
        onChange={handleChange}
        value={course.title}
      />
      <input type='submit' onChange={handleSubmit} value='Save' />
      {props.courses.map((createdCourse, i) => (
        <div key={i}>{createdCourse.title}</div>
      ))}
    </form>
  );
}
// // BindActionsCreators
// CoursesPage.propTypes = {
//   actions: PropTypes.object.isRequired,
//   courses: PropTypes.array.isRequired,
// }

// Manually
CoursesPage.propTypes = {
  createCourse: PropTypes.func.isRequired,
  courses: PropTypes.array.isRequired,
}

const mapStateToProps = state => {
  return {
    courses: state.courses
  }
}

// // Manually
// const mapDispatchToProps = dispatch => {
//   return {
//     createCourse: course => dispatch(courseActions.createCourse(course))
//   }
// }

// // BindActionsCreators
// const mapDispatchToProps = dispatch => {
//   return {
//     actions: bindActionCreators(courseActions, dispatch)
//   }
// }

// As an object
const mapDispatchToProps = {
  createCourse: courseActions.createCourse
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
