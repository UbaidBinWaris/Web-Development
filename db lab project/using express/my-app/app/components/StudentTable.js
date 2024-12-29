'use client';
import React from 'react'
import { useEffect , useState } from 'react'
import "@/app/globals.css";


const StudentTable = () => {
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
          const response = await fetch("/api/student-data");
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
    <div className="overflow-x-auto">
    <table className="min-w-full rounded-lg bg-white border border-gray-300">
      <thead>
        <tr className="bg-gray-200 text-black text-left rounded-lg">
          <th className="px-6 py-3 border-b">ID</th>
          <th className="px-6 py-3 border-b">Name</th>
          <th className="px-6 py-3 border-b">Email</th>
          <th className="px-6 py-3 border-b">Phone</th>
          <th className="px-6 py-3 border-b">Department</th>
        </tr>
      </thead>
      <tbody>
        {loading ? (
          <tr>
            <td colSpan="5" className="text-center py-4">
              Loading...
            </td>
          </tr>
        ) : studentData.length > 0 ? (
          studentData.map((student) => (
            <tr
              key={student.student_id}
              className="hover:bg-gray-100 rounded-xl text-black"
            >
              <td className="px-6 py-4 border-b">{student.student_id}</td>
              <td className="px-6 py-4 border-b">
                {student.first_name} {student.last_name}
              </td>
              <td className="px-6 py-4 border-b">{student.email}</td>
              <td className="px-6 py-4 border-b">
                {student.phone_number}
              </td>
              <td className="px-6 py-4 border-b">
                {student.department_name}
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="5" className="text-center py-4">
              No records found
            </td>
          </tr>
        )}
      </tbody>
    </table>
  </div>
  )
}

export default StudentTable
