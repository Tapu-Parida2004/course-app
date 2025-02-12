import React from "react";

const CourseSyllabus = ({course}) => {
  return (
    <div className="syllabus">
      {/* Title */}
      <h3 className="syllabus-title">Syllabus</h3>
      {/* Course syllabus */}
      {course.syllabus.map((week, index) => (
        <div key={index} className="syllabus-week">
          <h4 className="week-title">
            Week {week.week}: {week.topic}
          </h4>
          <p className="week-content">{week.content}</p>
        </div>
      ))}
    </div>
  );
};

export default CourseSyllabus;
