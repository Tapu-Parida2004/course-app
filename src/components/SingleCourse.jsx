import React from "react";
import { Link } from "react-router-dom"; // Import Link

const SingleCourse = ({ course, LikeButton }) => {
  return (
    <div className="course-item">
      <Link to={`/course/${course.id}`}>
      {/* Thumbnail */}
        <img
          src={
            course.thumbnail ||
            "https://res.cloudinary.com/dxvassqig/image/upload/v1739305575/404_i0tgci.png"
          }
          alt={course.name}
        />
        <h2>{course.name}</h2>
        <p>{course.instructor}</p>
      </Link>
      {/* LikeButton Component */}
      <LikeButton courseId={course.id} currentLikes={course.likes} />
    </div>
  );
};

export default SingleCourse;
