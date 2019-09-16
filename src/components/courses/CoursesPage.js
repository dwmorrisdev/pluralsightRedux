import React from "react";
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import * as courseActions from "../../redux/actions/courseActions";

class CoursesPage extends React.Component {

    state = {
        course: {
            title: ""
        }
    };

    handleChange = event => {
        const course = {...this.state.course, title: event.target.value};
        this.setState({course});
    };

    handleSubmit = event => {
        event.preventDefault();
        this.props.dispatch(courseActions.createCourse(this.state.course));
        const courseClear = {...this.state.course, title: ""};
        this.setState({course: courseClear});
    };

    handleClear = () => {
        //clear all courses
        alert("erase courses from state/store");
    };

    killCourse = event => {
        //clear given courses
        alert(`erase ${event.target.value} from state/store`);
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h2>Courses</h2>
                <h3> Add Course</h3>
                <input
                    type="text"
                    onChange={this.handleChange}
                    value={this.state.course.title}
                />

                <input type="submit" value="Save" />
                <input type="button" onClick={this.handleClear} value="Clear Courses"/>
                {this.props.courses.map(course => (
                    <div key={course.title}>{course.title} <input type="button" onClick={this.killCourse} value="kill"/></div>
                ))}
            </form>
        );
    }
}

CoursesPage.propTypes = {
    dispatch: PropTypes.func.isRequired,
    courses: PropTypes.array.isRequired
};

function mapStateToProps(state) {
    return {
        courses: state.courses
    };
}

export default connect(mapStateToProps)(CoursesPage);