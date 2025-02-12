import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import MarkAsCompletedButton from "./MarkAsCompletedButton";
Modal.setAppElement("#root");

const StudentModal = ({ isOpen, onRequestClose, students }) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
      <h2>Enrolled Students</h2>
      {students.length > 0 ? (
        students.map((student) => {
          return (
            <div key={student.name}>
              <p>
                {student.name} - {student.email}
              </p>
              {/* MarkAsCompletedButton component */}
              <MarkAsCompletedButton
                studentId={student.id}
                isCompleted={student.completed}
              />
            </div>
          );
        })
      ) : (
        // Display if no students
        <p>No students enrolled in this course.</p>
      )}
      {/* Close */}
      <button onClick={onRequestClose}>Close</button>
    </Modal>
  );
};

export default StudentModal;
