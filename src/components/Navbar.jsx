import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav style={{ padding: "10px", backgroundColor: "#f0f0f0" }}>
      {/* Navigate to / */}
      <Link
        to="/"
        style={{
          marginRight: "10px",
          textDecoration: "none",
          color: "blue",
        }}
      >
        Courses
      </Link>
      {/* navigate to /dashboard */}
      <Link to="/dashboard" style={{ textDecoration: "none", color: "blue" }}>
        Dashboard
      </Link>
    </nav>
  );
};

export default Navbar;
