import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
     

      <main className="flex flex-col justify-center items-center flex-grow">
        <h2 className="text-3xl font-bold mb-4 text-gray-800">Welcome to AuthApp</h2>
        <p className="text-gray-600 text-center mb-2">Your secure authentication solution.</p>
        <p className="text-gray-600 text-center mb-2">Create an account or log in to manage your profile.</p>
        <p className="text-gray-600 text-center">We ensure privacy and ease of use for your convenience.</p>
      </main>

      
    </div>
  );
};

export default Home;
