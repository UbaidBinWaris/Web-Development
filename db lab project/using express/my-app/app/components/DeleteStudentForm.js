"use client";
import React, { useState } from "react";

const DeleteStudentForm = ({ onClose }) => {
  const [studentId, setStudentId] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`/api/delete-student/${studentId}`, {
        method: "DELETE",
      });
      const result = await response.json();
      if (response.ok) {
        alert("Student deleted successfully!");
        onClose();
      } else {
        alert(result.error || "Failed to delete student");
      }
    } catch (error) {
      console.error("Error deleting student:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Student ID:</label>
        <input value={studentId} onChange={(e) => setStudentId(e.target.value)} required />
      </div>
      <button type="submit">Delete</button>
    </form>
  );
};

export default DeleteStudentForm;
