import React from "react";

const CourseInfo = ({ course }) => {
  return (
    // Course info
    <div className="course-info">
      <p>
        <strong>Enrollment Status:</strong> {course.enrollmentStatus}
      </p>
      <p>
        <strong>Duration:</strong> {course.duration}
      </p>
      <p>
        <strong>Schedule:</strong> {course.schedule}
      </p>
      <p>
        <strong>Location:</strong> {course.location}
      </p>
      <p>
        <strong>Pre-requisites:</strong> {course.prerequisites.join(", ")}
      </p>
    </div>
  );
};

export default CourseInfo;
