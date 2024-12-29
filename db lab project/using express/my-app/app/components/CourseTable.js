"use client";
import React, { useEffect, useState } from "react";
import "@/app/globals.css";
export const CourseTable = () => {
  const [studentData, setStudentData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState(""); // Added state for search term

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState(""); // 'insert', 'update', 'delete'

  const openModal = (type) => {
    setModalType(type);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalType("");
  };

  useEffect(() => {
    const fetchStudentData = async () => {
      try {
        const response = await fetch("/api/courses");
        const result = await response.json();
        setStudentData(result);
      } catch (error) {
        console.error("Error fetching student data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchStudentData();
  }, []);
  return (
    <div>
      <div className="overflow-x-auto px-7 pl-24">
        <table className="min-w-full rounded-lg bg-white shadow-md border border-gray-300">
          <thead>
            <tr className="bg-gray-800 text-white text-left rounded-t-lg">
              <th className="px-6 py-3 border-b border-gray-500">ID</th>
              <th className="px-6 py-3 border-b border-gray-500">Name</th>
              <th className="px-6 py-3 border-b border-gray-500">Credits</th>
              <th className="px-6 py-3 border-b border-gray-500">Department</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan="5" className="text-center py-4 text-gray-500">
                  Loading...
                </td>
              </tr>
            ) : studentData.length > 0 ? (
              studentData.map((course) => (
                <tr
                  key={course.course_id}
                  className="hover:bg-gray-100 transition-colors duration-200 text-black"
                >
                  <td className="px-6 py-4 border-b">{course.course_id}</td>
                  <td className="px-6 py-4 border-b">{course.course_name}</td>
                  <td className="px-6 py-4 border-b">{course.credits}</td>
                  <td className="px-6 py-4 border-b">
                    {course.department_name}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center py-4 text-gray-500">
                  No records found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};
