"use client";
import React, { useState } from "react";

const UpdateStudentForm = ({ initialData, onClose }) => {
  const [formData, setFormData] = useState(initialData);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`/api/update-student/${formData.student_id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      if (response.ok) {
        alert("Student updated successfully!");
        onClose();
      } else {
        alert(result.error || "Failed to update student");
      }
    } catch (error) {
      console.error("Error updating student:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Student ID:</label>
        <input name="student_id" value={formData.student_id} onChange={handleChange} disabled />
      </div>
      <div>
        <label>Name:</label>
        <input name="name" value={formData.name} onChange={handleChange} required />
      </div>
      <div>
        <label>Email:</label>
        <input name="email" value={formData.email} onChange={handleChange} required />
      </div>
      <button type="submit">Update</button>
    </form>
  );
};

export default UpdateStudentForm;
