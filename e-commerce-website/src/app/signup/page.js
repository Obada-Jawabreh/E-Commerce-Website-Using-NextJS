"use client";
// app/signup/page.js
import { useState } from 'react';
import axios from 'axios';
import Link from 'next/link';

const Signup = () => {
  const [first_name, setFirstName] = useState('');
  const [last_name, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/api/users/signup', { first_name, last_name, email, password });
      console.log(response.data);
      // Redirect to login after successful signup
      window.location.href = '/login';
    } catch (error) {
      console.error('Signup error:', error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Create an Account</h1>
      <form onSubmit={handleSignup} className="bg-white p-6 rounded-lg shadow-md">
        <div className="mb-4">
          <label htmlFor="first_name" className="block text-sm font-medium text-gray-700">First Name</label>
          <input type="text" id="first_name" value={first_name} onChange={(e) => setFirstName(e.target.value)} required className="mt-1 block w-full border border-gray-300 rounded-md p-2" />
        </div>
        <div className="mb-4">
          <label htmlFor="last_name" className="block text-sm font-medium text-gray-700">Last Name</label>
          <input type="text" id="last_name" value={last_name} onChange={(e) => setLastName(e.target.value)} required className="mt-1 block w-full border border-gray-300 rounded-md p-2" />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="mt-1 block w-full border border-gray-300 rounded-md p-2" />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
          <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required className="mt-1 block w-full border border-gray-300 rounded-md p-2" />
        </div>
        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">Sign Up</button>
      </form>
      <p className="mt-4">Already have an account? <Link href="/login" className="text-blue-600">Login here</Link></p>
    </div>
  );
};

export default Signup;
