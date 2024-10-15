import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Form, Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import SummaryApi from '../common';

const SignUp = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const [data, setData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    });
    
    const [otp, setOtp] = useState(""); 
    const [isOtpSent, setIsOtpSent] = useState(false); 

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (data.password === data.confirmPassword) {
            const dataResponse = await fetch(SummaryApi.signUP.url, {
                method: SummaryApi.signUP.method,
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(data)
            });

            const dataApi = await dataResponse.json();

            if (dataApi.success) {
                toast.success(dataApi.message);
                setIsOtpSent(true); 
            } else {
                toast.error(dataApi.message);
            }
        } else {
            toast.error("Please check password and confirm password");
        }
    };

   
    const handleVerifyOtp = async (e) => {
        e.preventDefault();

        const otpResponse = await fetch(SummaryApi.verifyOtp.url, {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                email: data.email, 
                otp: otp
            })
        });

        const otpApi = await otpResponse.json();

        if (otpApi.success) {
            toast.success(otpApi.message);
            navigate("/login");
        } else {
            toast.error(otpApi.message);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-6 rounded-md shadow-md w-full max-w-md">
                <h2 className="text-2xl font-semibold text-center text-teal-600 mb-6">Sign Up</h2>

                
                {!isOtpSent ? (
                    <Form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label className="block text-gray-700 mb-2">Name</label>
                            <input
                                type="text"
                                name="name"
                                value={data.name}
                                placeholder="Enter your name"
                                onChange={handleChange}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-teal-500"
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 mb-2">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={data.email}
                                placeholder="Enter your email"
                                onChange={handleChange}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-teal-500"
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 mb-2">Password</label>
                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Enter password"
                                    value={data.password}
                                    name="password"
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-teal-500"
                                />
                                <div
                                    className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer text-gray-600"
                                    onClick={() => setShowPassword((prev) => !prev)}
                                >
                                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                                </div>
                            </div>
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 mb-2">Confirm Password</label>
                            <div className="relative">
                                <input
                                    type={showConfirmPassword ? "text" : "password"}
                                    placeholder="Confirm password"
                                    value={data.confirmPassword}
                                    name="confirmPassword"
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-teal-500"
                                />
                                <div
                                    className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer text-gray-600"
                                    onClick={() => setShowConfirmPassword((prev) => !prev)}
                                >
                                    {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                                </div>
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="w-full bg-teal-500 text-white py-2 rounded-md hover:bg-teal-600 transition duration-200"
                            >
                                Sign Up
                            </button>
                        </div>
                    </Form>
                ) : (
                    
                    <Form onSubmit={handleVerifyOtp}>
                        <div className="mb-4">
                            <label className="block text-gray-700 mb-2">OTP</label>
                            <input
                                type="text"
                                name="otp"
                                value={otp}
                                placeholder="Enter the OTP sent to your email"
                                onChange={(e) => setOtp(e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-teal-500"
                            />
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="w-full bg-teal-500 text-white py-2 rounded-md hover:bg-teal-600 transition duration-200"
                            >
                                Verify OTP
                            </button>
                        </div>
                    </Form>
                )}

                <p className="my-5">
                    Already have an account?{" "}
                    <Link to={"/login"} className="text-teal-500 hover:text-red-700 hover:underline">
                        Login
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default SignUp;


