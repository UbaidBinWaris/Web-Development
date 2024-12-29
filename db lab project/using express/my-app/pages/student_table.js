'use client';
import { useEffect, useState } from 'react';

const TablePage = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch('/api/get-students');
                const data = await response.json();
                setUsers(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchUsers();
    }, []);

    if (loading) return <p>Loading...</p>;

    return (
        <div style={{ padding: '20px' }}>
            <h1>Students Records</h1>
            <table className="min-w-full border-collapse border border-gray-200">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="border border-gray-200 px-4 py-2">ID</th>
                        <th className="border border-gray-200 px-4 py-2">First Name</th>
                        <th className="border border-gray-200 px-4 py-2">last Name</th>
                        <th className="border border-gray-200 px-4 py-2">Date of Birth</th>
                        <th className="border border-gray-200 px-4 py-2">Email</th>
                        <th className="border border-gray-200 px-4 py-2">Phone Number</th>
                        <th className="border border-gray-200 px-4 py-2">Enrollment Date</th>
                        <th className="border border-gray-200 px-4 py-2">Department ID</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.id} className="hover:bg-gray-50">
                            <td className="border border-gray-200 px-4 py-2">{user.student_id}</td>
                            <td className="border border-gray-200 px-4 py-2">{user.first_name}</td>
                            <td className="border border-gray-200 px-4 py-2">{user.last_name}</td>
                            <td className="border border-gray-200 px-4 py-2">{user.date_of_birth}</td>
                            <td className="border border-gray-200 px-4 py-2">{user.email}</td>
                            <td className="border border-gray-200 px-4 py-2">{user.phone_number}</td>
                            <td className="border border-gray-200 px-4 py-2">{user.enrollment_date}</td>
                            <td className="border border-gray-200 px-4 py-2">{user.department_id}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TablePage;
