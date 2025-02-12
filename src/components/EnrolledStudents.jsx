import React from "react";
import StudentModal from "./StudentModal";

const EnrolledStudents = ({
  enrolledStudents,
  handleViewStudents,
  isModalOpen,
  closeModal,
  selectedCourseStudents,
}) => {
  return (
    <>
      <div className="course-list">
        {enrolledStudents.map((course) => (
          // Course card
          <div key={course.id} className="course-card">
            {/* Thumbnail */}
            <img
              src={
                course.thumbnail ||
                "https://res.cloudinary.com/dxvassqig/image/upload/v1739305575/404_i0tgci.png"
              }
              alt={course.name}
              className="course-thumbnail"
            />
            {/* Course info */}
            <div className="course-info">
              <h2>{course.name}</h2>
              <p>
                <strong>Instructor:</strong> {course.instructor}
              </p>
              <p>
                <strong>Due Date:</strong> {course.dueDate}
              </p>

              {/* View Students Button */}
              <button onClick={() => handleViewStudents(course)}>
                View Students
              </button>

              {/* Student Modal */}
              <StudentModal
                isOpen={isModalOpen}
                onRequestClose={closeModal}
                students={selectedCourseStudents}
              />
            </div>
          </div>
        ))}
      </div>
      {/* if enrolled empty */}
      {enrolledStudents.length === 0 && (
        <div className="container">
          <p className="no-course">No students enrolled</p>
        </div>
      )}
    </>
  );
};

export default EnrolledStudents;
