// File: app/students/[id].js
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

const StudentDetail = () => {
  const [student, setStudent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const router = useRouter();
  const { id } = router.query; // Get the student ID from the URL parameter

  useEffect(() => {
    const fetchStudentData = async () => {
      if (id) {
        try {
          const response = await fetch(`/api/student-data/${id}`);
          const result = await response.json();
          if (result.length > 0) {
            setStudent(result[0]); // Assuming the response is an array and taking the first result
          } else {
            setError("Student not found.");
          }
        } catch (error) {
          setError("Error fetching student data.");
        } finally {
          setLoading(false);
        }
      }
    };

    fetchStudentData();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h1 className="text-center text-3xl mt-5">Student Details</h1>
      <div className="container mx-auto p-6">
        {student && (
          <div>
            <p><strong>ID:</strong> {student.student_id}</p>
            <p><strong>Name:</strong> {student.first_name} {student.last_name}</p>
            <p><strong>Email:</strong> {student.email}</p>
            <p><strong>Phone:</strong> {student.phone_number}</p>
            <p><strong>Department:</strong> {student.department_name}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default StudentDetail;
