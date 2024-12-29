"use client";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const InsertStudentForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    student_id: "",
    first_name: "",
    last_name: "",
    date_of_birth: null,
    enrollment_date: null,
    email: "",
    phone_number: "",
    department_id: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleDateChange = (date, field) => {
    if (date) {
      const formattedDate = date.toISOString().split('T')[0]; // Format to 'YYYY-MM-DD'
      setFormData({ ...formData, [field]: formattedDate });
    } else {
      setFormData({ ...formData, [field]: null });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { student_id, department_id, phone_number, ...rest } = formData;

    // Validation
    if (!student_id || !department_id || !phone_number || Object.values(rest).some((value) => !value)) {
      alert("All fields are required.");
      return;
    }
    if (!/^[0-9]+$/.test(student_id) || !/^[0-9]+$/.test(department_id)) {
      alert("Student ID and Department ID must be integers.");
      return;
    }
    if (!/^[0-9]{13}$/.test(phone_number)) {
      alert("Phone number must be exactly 13 digits.");
      return;
    }

    try {
      const response = await fetch("/api/insert-student", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      if (response.ok) {
        alert("Student added successfully!");
        onClose();
      } else {
        alert(result.error || "Failed to add student");
      }
    } catch (error) {
      console.error("Error adding student:", error);
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
        className="mt-1 block w-full p-2 border rounded text-black"
        required
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
        required
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
        required
      />
    </div>
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700">Date of Birth</label>
      <DatePicker
        selected={formData.date_of_birth}
        onChange={(date) => handleDateChange(date, "date_of_birth")}
        className="mt-1 block w-full p-2 border rounded text-black"
        dateFormat="yyyy-MM-dd"
        placeholderText="YYYY-MM-DD"
        required
      />
    </div>
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700">Enrollment Date</label>
      <DatePicker
        selected={formData.enrollment_date}
        onChange={(date) => handleDateChange(date, "enrollment_date")}
        className="mt-1 block w-full p-2 border rounded text-black"
        dateFormat="yyyy-MM-dd"
        placeholderText="YYYY-MM-DD"
        required
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
        required
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
        required
      />
    </div>
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700">Department ID</label>
      <input
        type="text"
        name="department_id"
        value={formData.department_id}
        onChange={handleChange}
        className="mt-1 block w-full p-2 border rounded text-black"
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
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Submit
      </button>
    </div>
  </form>
  );
};

export default InsertStudentForm;
