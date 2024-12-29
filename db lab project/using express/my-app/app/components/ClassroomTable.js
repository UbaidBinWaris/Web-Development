'use client';
import React from 'react'
import { useEffect , useState } from 'react'
import "@/app/globals.css";


const ClassroomTable = () => {
  const [studentData, setStudentData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState(""); 
  
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalType, setModalType] = useState(""); 
  
  
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
          const response = await fetch("/api/classroom");
          const result = await response.json();
          setStudentData(result);
        } catch (error) {
          console.error("Error fetching classroom data:", error);
        } finally {
          setLoading(false);
        }
      };
  
      fetchStudentData();
    }, []);
      
  return (
    <div className="overflow-x-auto px-20 pl-24 ">
    <table className="min-w-full py-4 rounded-lg bg-white border border-gray-300">
      <thead>
        <tr className="bg-gray-200 text-black text-left rounded-lg">
          <th className="px-6 py-3 border-b">Room ID</th>
          <th className="px-6 py-3 border-b">Room Number</th>
          <th className="px-6 py-3 border-b">Building</th>
          <th className="px-6 py-3 border-b">Capacity</th>
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
          studentData.map((classroom) => (
            <tr
              key={classroom.room_id}
              className="hover:bg-gray-100 rounded-xl text-black"
            >
              <td className="px-6 py-4 border-b">{classroom.room_id}</td>
              <td className="px-6 py-4 border-b">
                {classroom.room_number}
              </td>
              <td className="px-6 py-4 border-b">{classroom.building}</td>
              <td className="px-6 py-4 border-b">
                {classroom.capacity}
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

export default ClassroomTable
