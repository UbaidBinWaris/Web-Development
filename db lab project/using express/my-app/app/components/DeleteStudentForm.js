"use client";

import React, { useState } from "react";

const DeleteStudentForm = ({ onClose }) => {
  const [studentId, setStudentId] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch(`/api/delete-student?student_id=${studentId}`, {
        method: "DELETE",
      });
  
      // Ensure the response is valid JSON
      const result = await response.json();
  
      if (response.ok) {
        alert("Student deleted successfully!");
        onClose();
      } else {
        alert(result.error || "Failed to delete student");
      }
    } catch (error) {
      console.error("Error deleting student:", error);
      alert("An unexpected error occurred while deleting the student.");
    }
  };
  

  return (
    <form onSubmit={handleSubmit} className="p-6 space-y-6 bg-white rounded shadow-md">
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Student ID</label>
        <input
          type="text"
          value={studentId}
          onChange={(e) => setStudentId(e.target.value)}
          className="mt-1 block w-full p-2 border rounded text-black"
          placeholder="Enter student ID"
          required
        />
      </div>
      <div className="flex justify-end space-x-2">
        <button
          type="button"
          onClick={onClose}
          className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        >
          Delete
        </button>
      </div>
    </form>
  );
};

export default DeleteStudentForm;
