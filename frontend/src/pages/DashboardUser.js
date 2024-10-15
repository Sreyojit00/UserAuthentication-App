import React from 'react';
import { useSelector } from 'react-redux';
import Moment from 'react-moment';

const DashboardUser = () => {
  
  const user = useSelector((state) => state.user.user);

  if (!user) {
    return <div className="text-center p-4">No user data available</div>;
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-8">User Dashboard</h1>
      <div className="bg-white shadow-md rounded-lg p-6">
        <div className="mb-4 flex justify-between border-b border-gray-300 pb-2">
          <span className="font-semibold text-gray-700">Name:</span>
          <span className="text-gray-600">{user.name}</span>
        </div>
        <div className="mb-4 flex justify-between border-b border-gray-300 pb-2">
          <span className="font-semibold text-gray-700">Email:</span>
          <span className="text-gray-600">{user.email}</span>
        </div>
        <div className="mb-4 flex justify-between border-b border-gray-300 pb-2">
          <span className="font-semibold text-gray-700">Role:</span>
          <span className="text-gray-600">{user.role}</span>
        </div>
        <div className="mb-4 flex justify-between border-b border-gray-300 pb-2">
          <span className="font-semibold text-gray-700">Created At:</span>
          <span className="text-gray-600">
            <Moment format="MMMM Do YYYY, h:mm:ss a">
              {user.createdAt}
            </Moment>
          </span>
        </div>
        <div className="mb-4 flex justify-between">
          <span className="font-semibold text-gray-700">Updated At:</span>
          <span className="text-gray-600">
            <Moment format="MMMM Do YYYY, h:mm:ss a">
              {user.updatedAt}
            </Moment>
          </span>
        </div>
      </div>
    </div>
  );
};

export default DashboardUser;
