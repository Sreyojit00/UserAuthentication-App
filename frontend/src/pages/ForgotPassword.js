import React, { useState } from 'react';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log('Sending OTP to:', email);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold text-center mb-6">Forgot Password</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="email">
              Enter your email address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-teal-400"
              placeholder="example@example.com"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-teal-500 text-white py-3 rounded hover:bg-teal-600 transition duration-200"
          >
            Send OTP
          </button>
        </form>
        <p className="text-center text-gray-600 mt-4">
          Remembered your password?{' '}
          <a href="/login" className="text-teal-500 hover:underline">
            Log in
          </a>
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword;
