import { doc, updateDoc, increment } from "firebase/firestore";
import { db } from "../firebaseConfig";
import { useState } from "react";

const LikeButton = ({ courseId, currentLikes }) => {
  // States
  const [likes, setLikes] = useState(currentLikes);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // function
  const handleLike = async () => {
    setLoading(true);
    setError(null);

    try {
      const courseRef = doc(db, "courses", courseId);
      await updateDoc(courseRef, {
        likes: increment(1),
      });

      setLikes((prev) => prev + 1);
    } catch (err) {
      setError("Failed to update likes. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {/* Like button */}
      <button onClick={handleLike} className="like-button" disabled={loading}>
        {loading ? " 👍 Loading..." : `👍 Like ${likes}`}
      </button>
      {/* error message */}
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default LikeButton;
