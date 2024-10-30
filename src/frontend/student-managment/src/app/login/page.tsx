"use client"; // Ensures this component is rendered on the client-side
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation'; // Import useRouter for navigation
import { auth } from '../../lib/firebase'; // Import your Firebase configuration
import { signInWithEmailAndPassword } from 'firebase/auth'; // Import Firebase sign-in method

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>(''); // State for email input
  const [password, setPassword] = useState<string>(''); // State for password input
  const [error, setError] = useState<string>(''); // State for error messages
  const router = useRouter(); // Initialize the router

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent default form submission
    setError(''); // Reset error state before login attempt

    try {
      // Attempt to log in with Firebase authentication
      await signInWithEmailAndPassword(auth, email, password);
      console.log('Logged in:', email);
      // Redirect to the dashboard on successful login
      router.push('/pages/dashboard');
    } catch (err) {
      console.error(err); // Log the error to the console
      setError('Failed to log in. Please check your credentials.'); // Set error message
    }
  };

  return (
    <div className="h-screen login-container flex flex-col items-center justify-center ">
      <h2 className="font-semibold text-[30px]">Welcome, Log into your account</h2>
      <p className="text-[#667085] mt-5">It is our great pleasure to have you on board!</p>
      <form onSubmit={handleLogin} className="w-full max-w-sm mt-10">
        <div className="mb-4">
          <label className="block mb-1">Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)} // Update email state
            required
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
          Login
        </button>
        <div className="flex justify-center mt-5 gap-2">
          <h1>Already have an account?</h1>
          <p className="text-[#2D88D4] font-bold">
            <Link href="/register">Sign up</Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
