"use client";
import React, { useState } from "react";
import "@/app/globals.css";
import Header from "@/app/components/header";
import Sidebar from "@/app/components/sidebar";
import LibraryTable from "@/app/components/LibraryTable";

export const library = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal for Loan/Return
  const [loanData, setLoanData] = useState({
    studentId: "",
    isbn: "",
  });

  const [loanError, setLoanError] = useState(""); // To display error for Loan/Return

  const handleLoanChange = (e) => {
    const { name, value } = e.target;
    setLoanData({ ...loanData, [name]: value });
  };

  const handleLoanSubmit = async (e, action) => {
    e.preventDefault();

    const { studentId, isbn } = loanData;

    // Validate form fields
    if (!studentId.trim() || !isbn.trim()) {
      alert("Both Student ID and ISBN are required.");
      return;
    }

    try {
      const response = await fetch(`/api/${action}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ studentId, isbn }),
      });

      if (response.ok) {
        const data = await response.json();
        alert(data.message || `${action === "loan_book" ? "Loaned" : "Returned"} book successfully!`);
        setIsModalOpen(false); // Close modal
        setLoanData({ studentId: "", isbn: "" }); // Reset the form
        setLoanError(""); // Reset error
      } else {
        const errorData = await response.json();
        alert(errorData.error || "Failed to process the request.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred.");
    }
  };

  return (
    <div>
      <Header />
      <Sidebar />

      <div className="container mx-auto p-6">
        <h1 className="flex justify-center text-3xl p-5 mt-5">Library</h1>
      </div>

      <div className="flex gap-5 justify-end p-5 pr-48">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => setIsModalOpen(true)}
        >
          Loan / Return
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => setIsModalOpen(true)}
        >
          Add Book
        </button>
      </div>

      <LibraryTable />

      {/* Loan/Return Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-96">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Loan / Return Book</h2>
            <form>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Student ID
                </label>
                <input
                  type="text"
                  name="studentId"
                  value={loanData.studentId}
                  onChange={handleLoanChange}
                  className="mt-1 block w-full p-2 border rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  ISBN
                </label>
                <input
                  type="text"
                  name="isbn"
                  value={loanData.isbn}
                  onChange={handleLoanChange}
                  className="mt-1 block w-full p-2 border rounded"
                  required
                />
              </div>
              <div className="flex justify-end space-x-2">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={(e) => handleLoanSubmit(e, "loan_book")}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  Loan Book
                </button>
                <button
                  type="button"
                  onClick={(e) => handleLoanSubmit(e, "return_book")}
                  className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                >
                  Return Book
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default library;
