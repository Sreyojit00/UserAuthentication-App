import React, { useState } from 'react';
import { toast } from 'react-toastify';
import SummaryApi from '../common';

const Passwordreset = () => {
    const [formData, setFormData] = useState({
        email: '',
        newPassword: '',
    });

    const { email, newPassword } = formData;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleResetPassword = async (e) => {
        e.preventDefault();
        
       
        const response = await fetch(SummaryApi.resetPassword.url, { 
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            
            body: JSON.stringify(formData), 
        });

        const data = await response.json();
        if (data.success) {
            toast.success(data.message);
            
        } else {
            toast.error(data.message);
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md w-96">
                <h2 className="text-2xl font-bold text-center mb-6">Reset Password</h2>
                <form onSubmit={handleResetPassword}>
                    <div className="mb-4">
                        <label className="block text-gray-700">Email</label>
                        <input
                            type="email"
                            name="email" 
                            value={email}
                            onChange={handleChange} 
                            required
                            className="mt-1 block w-full border border-gray-300 rounded-lg p-2"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">New Password</label>
                        <input
                            type="password"
                            name="newPassword" 
                            value={newPassword}
                            onChange={handleChange} 
                            required
                            className="mt-1 block w-full border border-gray-300 rounded-lg p-2"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-teal-500 text-white p-2 rounded-lg hover:bg-teal-600"
                    >
                        Reset Password
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Passwordreset;
