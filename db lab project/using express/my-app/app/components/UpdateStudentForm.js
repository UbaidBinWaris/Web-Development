"use client";

import React, { useState } from "react";

const UpdateStudentForm = ({ initialData, onClose }) => {
  const [formData, setFormData] = useState(initialData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updateData = {};
    if (formData.first_name) updateData.first_name = formData.first_name;
    if (formData.last_name) updateData.last_name = formData.last_name;
    if (formData.email) updateData.email = formData.email;
    if (formData.phone_number) updateData.phone_number = formData.phone_number;

    try {
      const response = await fetch(`/api/update-student/${formData.student_id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updateData),
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
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Student ID</label>
        <input
          type="text"
          name="student_id"
          value={formData.student_id}
          onChange={handleChange}
          className="mt-1 block w-full p-2 border rounded bg-gray-200 text-black"
          disabled
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">First Name</label>
        <input
          type="text"
          name="first_name"
          value={formData.first_name}
          onChange={handleChange}
          className="mt-1 block w-full p-2 border rounded text-black"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Last Name</label>
        <input
          type="text"
          name="last_name"
          value={formData.last_name}
          onChange={handleChange}
          className="mt-1 block w-full p-2 border rounded text-black"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="mt-1 block w-full p-2 border rounded text-black"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Phone Number</label>
        <input
          type="text"
          name="phone_number"
          value={formData.phone_number}
          onChange={handleChange}
          className="mt-1 block w-full p-2 border rounded text-black"
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
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Update
        </button>
      </div>
    </form>
  );
};

export default UpdateStudentForm;
