"use client";
import React, { useState , useEffect } from "react";
import "@/app/globals.css";
import Header from "@/app/components/header";
import Sidebar from "@/app/components/sidebar";
import LibraryTable from "@/app/components/LibraryTable";

export const library = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    isbn: "",
    title: "",
    author: "",
  });

  const [isbnError, setIsbnError] = useState(""); // To display error for duplicate ISBN

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleIsbnChange = (e) => {
    const isbn = e.target.value;

    setFormData({ ...formData, isbn });
    setIsbnError(""); // Reset error message
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate ISBN
    if (!/^\d{1,11}$/.test(formData.isbn)) {
      setIsbnError("ISBN must be a maximum of 11 digits.");
      return;
    }

    // Validate other fields
    if (!formData.title.trim() || !formData.author.trim()) {
      alert("All fields (ISBN, Title, and Author) are required.");
      return;
    }

    try {
      const response = await fetch("/api/add_book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Book added successfully!");
        setIsModalOpen(false); // Close modal
        setFormData({ isbn: "", title: "", author: "" }); // Reset the form
        setIsbnError(""); // Reset error message
      } else {
        const errorData = await response.json();
        alert(errorData.error || "Failed to add the book.");
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

      <div className="flex justify-end p-5 pr-48">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => setIsModalOpen(true)}
        >
          Add book to the list
        </button>
      </div>

      <LibraryTable />

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-96">
            <h2 className="text-2xl font-bold mb-4">Add Book</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  ISBN
                </label>
                <input
                  type="text"
                  name="isbn"
                  value={formData.isbn}
                  onChange={handleIsbnChange}
                  className={`mt-1 block w-full p-2 border rounded ${
                    isbnError ? "border-red-500" : "border-gray-300"
                  }`}
                  maxLength={11} // Restrict input to 11 characters
                  required
                />
                {isbnError && (
                  <p className="text-red-500 text-sm">{isbnError}</p>
                )}
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Title
                </label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  className="mt-1 block w-full p-2 border rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Author
                </label>
                <input
                  type="text"
                  name="author"
                  value={formData.author}
                  onChange={handleChange}
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
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  Save
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
