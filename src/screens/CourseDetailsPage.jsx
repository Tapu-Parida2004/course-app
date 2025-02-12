import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchCourses } from "../redux/coursesThunks";
import "../App.css";
import CourseSyllabus from "../components/CourseSyllabus";
import CourseInfo from "../components/CourseInfo";
const CourseDetailsPage = () => {
  const { id } = useParams(); // get id
  const dispatch = useDispatch();

  const course = useSelector((state) =>
    state.courses.courses.find((course) => course.id === id)
  );

  useEffect(() => {
    dispatch(fetchCourses());
  }, [dispatch]);

  if (!course) {
    return (
      <div className="message-container">
        <p className="message loading">Loading...</p>
      </div>
    );
  }

  return (
    <div className="course-details-container">
      <h1 className="course-title">{course.name}</h1>
      <h3 className="course-instructor">
        <strong>Instructor:</strong> {course.instructor}
      </h3>
      <p className="course-description">{course.description}</p>
      {/* CourseInfo component */}
      <CourseInfo course={course} />
      {/* CourseSyllabus component */}
      <CourseSyllabus course={course} />
    </div>
  );
};

export default CourseDetailsPage;
