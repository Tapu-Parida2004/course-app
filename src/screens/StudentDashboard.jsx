import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCourses } from "../redux/coursesThunks";
import EnrolledStudents from "../components/EnrolledStudents";

const UserDashboard = () => {
  const dispatch = useDispatch();
  // States
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCourseStudents, setSelectedCourseStudents] = useState([]);

  const courses = useSelector((state) => state.courses.courses);

  // Get enrolled students
  const enrolledStudents = courses.filter((course) => {
    return course.students && course.students.length > 0;
  });

  useEffect(() => {
    dispatch(fetchCourses());
  }, [dispatch]);

  const handleViewStudents = (course) => {
    setSelectedCourseStudents(course.students);
    setIsModalOpen(true);
  };
  // Close modal
  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="user-dashboard">
      <h1 style={{ marginBottom: "50px" }}>Student Dashboard</h1>
      {/* EnrolledStudents component */}
      <EnrolledStudents
        closeModal={closeModal}
        handleViewStudents={handleViewStudents}
        enrolledStudents={enrolledStudents}
        isModalOpen={isModalOpen}
        selectedCourseStudents={selectedCourseStudents}
      />
    </div>
  );
};

export default UserDashboard;
