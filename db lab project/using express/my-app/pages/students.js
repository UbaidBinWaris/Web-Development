"use client";
import React, { useEffect, useState } from "react";
import Header from "@/app/components/header";
import Sidebar from "@/app/components/sidebar";

import StudentTable from "@/app/components/StudentTable";
import "@/app/globals.css";
import Image from "next/image";

const Students = () => {
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

  const handleSearch = async () => {
    if (searchTerm) {
      try {
        setLoading(true);
        const response = await fetch(`/api/student-data/${searchTerm}`); // Endpoint to fetch by ID
        const result = await response.json();
        if (result.length > 0) {
          setStudentData(result); // Update student data with search results
        } else {
          alert("Student not found.");
        }
      } catch (error) {
        console.error('Error searching student data:', error);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div>
      <Header />
      <Sidebar />
      <div className="container mx-auto p-6">
        <h1 className="flex justify-center text-3xl p-5 mt-5">
          Student Records
        </h1>

        <div className="flex justify-between mb-4">
          <div className="flex justify-end items-center mb-4">
            <input
              type="text"
              placeholder="Search by ID"
              className="border border-gray-300 rounded-l-lg px-4 py-2 w-60 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchTerm} // Set search term value here
              onChange={(e) => setSearchTerm(e.target.value)} // Handle input change
            />
            <button
              onClick={handleSearch}
              className="bg-blue-500 text-white px-4 py-2 rounded-r-lg flex items-center hover:bg-blue-600">
              <Image
                src="/icons/search.svg"
                width={20}
                height={20}
                alt="search"
                className="mr-2"
              />
              Search
            </button>
          </div>
          <div className="flex justify-end mb-4">
            <h2 className="flex justify-center items-center pr-3 font-bold">
              Operation on Database system
            </h2>
            <button
              onClick={() => openModal("insert")}
              className="bg-green-500 text-white px-6 py-2 rounded-lg mx-2 hover:bg-green-600"
            >
              Insert
            </button>
            <button
              onClick={() => openModal("update")}
              className="bg-yellow-500 text-white px-6 py-2 rounded-lg mx-2 hover:bg-yellow-600"
            >
              Update
            </button>
            <button
              onClick={() => openModal("delete")}
              className="bg-red-500 text-white px-6 py-2 rounded-lg mx-2 hover:bg-red-600"
            >
              Delete
            </button>
          </div>
        </div>
        {/* Table */}
        
        <StudentTable/>
        {/* Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
            <div className="bg-white rounded-lg p-6 w-96">
              <h2 className="text-xl font-semibold mb-4 capitalize">
                {modalType} Student
              </h2>
              {modalType === "insert" && (
                <form>
                  {/* Insert Form */}
                  <input
                    type="text"
                    placeholder="Student Name"
                    className="block w-full px-4 py-2 mb-4 border rounded-lg"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="block w-full px-4 py-2 mb-4 border rounded-lg"
                  />
                  <input
                    type="text"
                    placeholder="Phone"
                    className="block w-full px-4 py-2 mb-4 border rounded-lg"
                  />
                  <input
                    type="text"
                    placeholder="Department"
                    className="block w-full px-4 py-2 mb-4 border rounded-lg"
                  />
                  <button
                    type="submit"
                    className="bg-green-500 text-white px-4 py-2 rounded-lg w-full hover:bg-green-600"
                  >
                    Submit
                  </button>
                </form>
              )}
              {modalType === "update" && <p>Update form goes here...</p>}
              {modalType === "delete" && <p>Delete operation goes here...</p>}

              <button
                onClick={closeModal}
                className="mt-4 text-red-500 underline w-full text-center"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Students;
