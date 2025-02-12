import { doc, getDoc, updateDoc } from "firebase/firestore";
import { useState, useEffect } from "react";
import { db } from "../firebaseConfig";
import { useDispatch, useSelector } from "react-redux";
import { fetchCourses } from "../redux/coursesThunks";

const MarkAsCompletedButton = ({ studentId, isCompleted }) => {
  const dispatch = useDispatch();
  // States
  const [courseId, setCourseId] = useState("");
  const [completed, setCompleted] = useState(isCompleted);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const courses = useSelector((state) => state.courses.courses);
  const [progress, setProgress] = useState(0);

  // Fetch
  useEffect(() => {
    dispatch(fetchCourses());
  }, [dispatch]);

  // Find Course by Student id
  useEffect(() => {
    const course = courses.find((course) =>
      course.students?.some((student) => student.id === studentId)
    );
    if (course) {
      setCourseId(course.id);
      updateProgress(course);
    }
  }, [courses, studentId]);

  // Set completed
  useEffect(() => {
    setCompleted(isCompleted);
  }, [isCompleted]);

  // Update progress here
  const updateProgress = (course) => {
    if (!course || !course.students) return;
    const completedCount = course.students.filter((s) => s.completed).length;
    const totalStudents = course.students.length;
    const progressPercentage = totalStudents
      ? (completedCount / totalStudents) * 100
      : 0;
    setProgress(progressPercentage);
  };

  // handle mark as completed function
  const handleMarkAsCompleted = async () => {
    if (completed) return;
    // set state
    setCompleted(true);
    setLoading(true);
    setError(null);

    try {
      const courseRef = doc(db, "courses", courseId);
      const courseSnap = await getDoc(courseRef);

      if (!courseSnap.exists()) {
        throw new Error("Course not found");
      }

      const courseData = courseSnap.data();
      const students = courseData.students;

      const updatedStudents = students.map((student) =>
        student.id === studentId ? { ...student, completed: true } : student
      );

      await updateDoc(courseRef, { students: updatedStudents });

      updateProgress({ ...courseData, students: updatedStudents });

      console.log("Firestore update successful!");
    } catch (err) {
      console.error("Error updating Firestore:", err);
      setError(`Failed to update: ${err.message}`);
      setCompleted(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="course-progress-container">
      <div className="progress-bar-container">
        {/* Progress bar */}
        <progress
          value={progress}
          max="100"
          className="progress-bar"
          style={{ transition: "width 0.5s ease-in-out" }}
        />
        <span>{`${Math.round(progress)}%`}</span>
      </div>
      {/* Mark as Completed button */}
      <button
        onClick={handleMarkAsCompleted}
        className={`mark-completed-button ${completed ? "completed" : ""}`}
        disabled={loading || completed}
      >
        {loading
          ? "🔄 Updating..."
          : completed
          ? "✅ Completed"
          : "✔ Mark as Completed"}
      </button>
      {/* error */}
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default MarkAsCompletedButton;
