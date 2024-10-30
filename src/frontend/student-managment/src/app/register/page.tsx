"use client"; // Ensures this component is rendered on the client-side
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation'; // Import useRouter for navigation
import { auth } from '../../lib/firebase'; // Make sure to import your Firebase configuration
import { createUserWithEmailAndPassword } from 'firebase/auth';


const Register: React.FC = () => {
  const [email, setEmail] = useState<string>(''); // State for email input
  const [password, setPassword] = useState<string>(''); // State for password input
  const [error, setError] = useState<string>(''); // State for error messages
  const router = useRouter(); // Initialize the router

  const handleRegister = async (e) => {
    e.preventDefault();
    setError('');
  
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      // Redirect to the dashboard
      router.push('/dashboard');
    } catch (error) {
      console.error(error);
      setError('Failed to register. Please try again.');
    }
  };

  return (
    <div className="h-screen login-container flex flex-col items-center justify-center">
      <h2 className="font-semibold text-[30px]">Create an Account</h2>
      <p className="text-[#667085] mt-5">Join us and get started!</p>
      <form onSubmit={handleRegister} className="w-full max-w-sm mt-10">
        <div className="mb-4">
          <label className="block mb-1">Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)} // Update email state
            require
            className="border border-gray-300 rounded p-2 w-full"
            placeholder="Enter your email"
            autoComplete="off"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)} // Update password state
            required
            className="border border-gray-300 rounded p-2 w-full"
            placeholder="Enter your password"
            autoComplete="new-password"
          />
        </div>
        {error && <p className="error text-red-500">{error}</p>} {/* Display error messages */}
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded w-full mt-5">
          Register
        </button>
        <div className="flex justify-center mt-5 gap-2">
          <h1>Already have an account?</h1>
          <p className="text-[#2D88D4] font-bold">
            <Link href="/login">Log in</Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Register;
