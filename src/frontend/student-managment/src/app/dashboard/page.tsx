"use client"; // Ensures this component is rendered on the client-side
import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Make sure to install axios for API calls
import Link from 'next/link';

// Define the Student interface for type safety
interface Student {
  id?: number;
  firstName: string;
  lastName: string;
  email: string;
  job: string;
  gender: string;
}

const Dashboard: React.FC = () => {
  const [students, setStudents] = useState<Student[]>([]);
  const [isOpen, setIsOpen] = useState(false); // For the modal
  const [newStudent, setNewStudent] = useState<Student>({
    firstName: '',
    lastName: '',
    email: '',
    job: '',
    gender: '',
  });

  // Fetch students on component mount
  
  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await axios.get('http://localhost:8080/students'); // Ensure this is correct
        setStudents(response.data);
      } catch (error) {
        console.error('Error fetching students:', error); // Log the error details
      }
    };

    fetchStudents();
  }, []);

  // Handle adding a new student
  const handleAddStudent = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post('/api/students/save', newStudent);
      setIsOpen(false); // Close modal
      setNewStudent({ firstName: '', lastName: '', email: '', job: '', gender: '' }); // Reset form
      // Fetch updated students list
      const response = await axios.get('/api/students');
      setStudents(response.data);
    } catch (error) {
      console.error('Failed to add student:', error);
    }
  };

  return (
    <div className="flex">
      {/* Side Navigation */}
      <aside className="w-64 bg-gray-800 text-white h-screen">
        <button onClick={() => setIsOpen(!isOpen)} className="p-4">
          {isOpen ? 'Close' : 'Open'} Menu
        </button>
        {isOpen && (
          <nav>
            <ul>
              <li><Link href="/dashboard">Home</Link></li>
              <li><Link href="/dashboard/billing">Billing</Link></li>
              <li><Link href="/dashboard/settings">Settings</Link></li>
              <li><Link href="/dashboard/profile">Profile</Link></li>
            </ul>
          </nav>
        )}
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search students..."
            className="border rounded p-2 mr-2"
          />
          <input
            type="text"
            placeholder="Filter by..."
            className="border rounded p-2 mr-2"
          />
          <button
            onClick={() => setIsOpen(true)}
            className="bg-blue-500 text-white p-2 rounded"
          >
            Add Student
          </button>
        </div>

        {/* Students Table */}
        <table className="min-w-full border-collapse border border-gray-200">
          <thead>
            <tr>
              <th className="border border-gray-300 p-2">First Name</th>
              <th className="border border-gray-300 p-2">Last Name</th>
              <th className="border border-gray-300 p-2">Email</th>
              <th className="border border-gray-300 p-2">Job</th>
              <th className="border border-gray-300 p-2">Gender</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.id}>
                <td className="border border-gray-300 p-2">{student.firstName}</td>
                <td className="border border-gray-300 p-2">{student.lastName}</td>
                <td className="border border-gray-300 p-2">{student.email}</td>
                <td className="border border-gray-300 p-2">{student.job}</td>
                <td className="border border-gray-300 p-2">{student.gender}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Modal for Adding Student */}
        {isOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded">
              <h2 className="text-lg font-bold mb-4">Add New Student</h2>
              <form onSubmit={handleAddStudent}>
                <input
                  type="text"
                  placeholder="First Name"
                  value={newStudent.firstName}
                  onChange={(e) => setNewStudent({ ...newStudent, firstName: e.target.value })}
                  required
                  className="border rounded p-2 mb-2 w-full"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  value={newStudent.lastName}
                  onChange={(e) => setNewStudent({ ...newStudent, lastName: e.target.value })}
                  required
                  className="border rounded p-2 mb-2 w-full"
                />
                <input
                  type="email"
                  placeholder="Email"
                  value={newStudent.email}
                  onChange={(e) => setNewStudent({ ...newStudent, email: e.target.value })}
                  required
                  className="border rounded p-2 mb-2 w-full"
                />
                <input
                  type="text"
                  placeholder="Job"
                  value={newStudent.job}
                  onChange={(e) => setNewStudent({ ...newStudent, job: e.target.value })}
                  required
                  className="border rounded p-2 mb-2 w-full"
                />
                <select
                  value={newStudent.gender}
                  onChange={(e) => setNewStudent({ ...newStudent, gender: e.target.value })}
                  required
                  className="border rounded p-2 mb-2 w-full"
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
                <div className="flex justify-between">
                  <button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    className="bg-gray-500 text-white p-2 rounded"
                  >
                    Cancel
                  </button>
                  <button type="submit" className="bg-blue-500 text-white p-2 rounded">
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Dashboard;
