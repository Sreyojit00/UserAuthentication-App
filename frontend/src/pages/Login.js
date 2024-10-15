import React, { useContext, useState } from 'react'

import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import SummaryApi from '../common';
import { toast } from 'react-toastify';
import Context from '../context';

const Login = () => {
    const [showPassword,setShowPassword] = useState(false)
    const [data,setData] = useState({
        email : "",
        password : ""
    })
    const { fetchUserDetails} = useContext(Context)
    const navigate = useNavigate()
    

    const handleOnChange = (e) =>{
        const { name , value } = e.target

        setData((preve)=>{
            return{
                ...preve,
                [name] : value
            }
        })
    }


    const handleSubmit = async(e) =>{
        e.preventDefault()

        const dataResponse = await fetch(SummaryApi.signIn.url,{
            method : SummaryApi.signIn.method,
            credentials : 'include',
            headers : {
                "content-type" : "application/json"
            },
            body : JSON.stringify(data)
        })

        const dataApi = await dataResponse.json()

        if(dataApi.success){
            toast.success(dataApi.message)
            navigate('/')
            fetchUserDetails()
           
        }

        if(dataApi.error){
            toast.error(dataApi.message)
        }

    }

    console.log("data login",data)
    
    return(
        <section id='login'>
            <div className='mx-auto container p-4'>
                <div className='bg-white p-5 w-full max-w-sm mx-auto shadow-lg rounded-lg'>
                    <form className='pt-6 flex flex-col gap-2' onSubmit={handleSubmit}>
                        <div className='grid'>
                            <label className='text-gray-700'>Email:</label>
                            <div className='bg-teal-50 p-2 rounded'>
                                <input 
                                    type='email' 
                                    placeholder='Enter email' 
                                    name='email'
                                    value={data.email}
                                    onChange={handleOnChange}
                                    className='w-full h-full outline-none bg-transparent text-gray-800'
                                    required
                                />
                            </div>
                        </div>

                        <div>
                            <label className='text-gray-700'>Password:</label>
                            <div className='bg-teal-50 p-2 flex rounded'>
                                <input 
                                    type={showPassword ? "text" : "password"} 
                                    placeholder='Enter password'
                                    value={data.password}
                                    name='password' 
                                    onChange={handleOnChange}
                                    className='w-full h-full outline-none bg-transparent text-gray-800'
                                    required
                                />
                                <div className='cursor-pointer text-xl text-gray-600' onClick={() => setShowPassword((prev) => !prev)}>
                                    <span>
                                        {showPassword ? <FaEyeSlash/> : <FaEye/>}
                                    </span>
                                </div>
                            </div>
                            <Link to={'/forgot-password'} className='block w-fit ml-auto text-teal-600 hover:underline hover:text-teal-700 mt-1'>
                                Forgot password?
                            </Link>
                        </div>

                        <button className='bg-teal-600 hover:bg-teal-700 text-white px-6 py-2 w-full max-w-[150px] rounded-full hover:scale-105 transition-all mx-auto block mt-6'>
                            Login
                        </button>
                    </form>

                    <p className='my-5 text-center'>
                        Don't have an account? <Link to={"/signup"} className='text-teal-600 hover:text-teal-700 hover:underline'>Sign up</Link>
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Login