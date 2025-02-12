import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import Navbar from "./components/Navbar";
import CourseDetailsPage from "./screens/CourseDetailsPage";
import CourseListingPage from "./screens/CourseListingPage";
import StudentDashboard from "./screens/StudentDashboard";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        {/* Navbar */}
        <Navbar /> 
        <Routes>
          <Route path="/" element={<CourseListingPage />} />
          <Route path="/course/:id" element={<CourseDetailsPage />} />
          <Route path="/dashboard" element={<StudentDashboard />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
