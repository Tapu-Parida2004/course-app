import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCourses } from "../redux/coursesThunks";
import LikeButton from "../components/LikeButton";
import SingleCourse from "../components/SingleCourse";
import Search from "../components/Search";

const CourseListingPage = () => {
  const dispatch = useDispatch();
  const { courses, loading, error } = useSelector((state) => state.courses);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    dispatch(fetchCourses());
  }, [dispatch]);

  // filter by name and instructor
  const filteredCourses = courses.filter(
    (course) =>
      course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.instructor.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // loading
  if (loading)
    return (
      <div className="message-container">
        <p className="message loading">Loading...</p>
      </div>
    );
  // error
  if (error)
    return (
      <div className="message-container">
        <p className="message error">Error: {error}</p>
      </div>
    );

  return (
    <>
      <h1 className="title">Course Listing</h1>
      <div className="course-container">
        {/* Search  */}
        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <div className="course-list">
          {filteredCourses &&
            filteredCourses.map((course) => (
              // SingleCourse
              <SingleCourse
                course={course}
                key={course.id}
                LikeButton={LikeButton}
              />
            ))}
        </div>
      </div>
      {/* if empty course */}
      {!filteredCourses.length > 0 && (
        <div className="container">
          <p className="no-course">No course found</p>
        </div>
      )}
    </>
  );
};

export default CourseListingPage;
