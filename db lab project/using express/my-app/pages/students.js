"use client";

import React, { useState } from "react";
import Header from "@/app/components/header";
import Sidebar from "@/app/components/sidebar";
import StudentTable from "@/app/components/StudentTable";
import InsertStudentForm from "@/app/components/InsertStudentForm";
import UpdateStudentForm from "@/app/components/UpdateStudentForm";
import DeleteStudentForm from "@/app/components/DeleteStudentForm";
import "@/app/globals.css";

const Students = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState("");
  const [selectedStudentData, setSelectedStudentData] = useState({});

  const openModal = (type, studentData = {}) => {
    setModalType(type);
    setSelectedStudentData(studentData);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalType("");
    setSelectedStudentData({});
  };

  const renderModalContent = () => {
    switch (modalType) {
      case "insert":
        return <InsertStudentForm onClose={closeModal} />;
      case "update":
        return (
          <UpdateStudentForm
            initialData={selectedStudentData}
            onClose={closeModal}
          />
        );
      case "delete":
        return (
          <DeleteStudentForm
            initialData={selectedStudentData}
            onClose={closeModal}
          />
        );
      default:
        return null;
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
            />
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-r-lg flex items-center hover:bg-blue-600"
            >
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

        <StudentTable />

        {isModalOpen && (
          <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
            <div className="bg-white rounded-lg p-6 w-96">
              {renderModalContent()}
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
