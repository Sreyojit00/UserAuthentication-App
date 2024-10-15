import React, { useState } from 'react';
import { FaRegCircleUser } from "react-icons/fa6";
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import SummaryApi from '../common';
import { toast } from 'react-toastify';
import { setUserDetails } from '../store/userSlice';
import ROLE from '../common/role';

const Header = () => {
  const user = useSelector(state => state?.user?.user);
  const dispatch = useDispatch();
  const [menuDisplay, setMenuDisplay] = useState(false); 
  const navigate = useNavigate();

  const handleLogout = async () => {
    const fetchData = await fetch(SummaryApi.logout_user.url, {
      method: SummaryApi.logout_user.method,
      credentials: 'include'
    });

    const data = await fetchData.json();

    if (data.success) {
      toast.success(data.message);
      dispatch(setUserDetails(null));
      navigate("/");
    } else {
      toast.error(data.message);
    }
  };

  const handleUserIconClick = () => {
    setMenuDisplay(prev => !prev); 
  };

  return (
    <header className='h-16 shadow-md bg-teal-600 fixed w-full z-40'>
      <div className='h-full container mx-auto flex items-center px-4 justify-between'>

        {/* Logo and Navigation Links */}
        <div className='flex items-center gap-7'>
          <Link to="/" className='text-2xl font-semibold text-white'>AuthenticateApp</Link>
          <nav className='flex items-center gap-6'>
            <Link to="/signup" className='hover:text-teal-300 text-white'>
              Sign Up
            </Link>
          </nav>
        </div>

       
        <div className='flex items-center gap-7'>
          <div className='relative flex justify-center'>
          
            <div 
              className='text-3xl cursor-pointer relative flex justify-center text-white' 
              onClick={handleUserIconClick}  
            >
              <FaRegCircleUser />
            </div>

            
            {menuDisplay && (
              <div className='absolute bg-white bottom-0 top-11 h-fit p-2 shadow-lg rounded'>
                <nav>
                 
                  {user?.role === ROLE.ADMIN && (
                    <Link 
                      to={"/alluser"} 
                      className='whitespace-nowrap hover:bg-slate-100 p-2 block' 
                      onClick={handleUserIconClick} 
                    >
                      All-User
                    </Link>
                  )}

                 
                  {user?.role === ROLE.GENERAL && (
                    <Link 
                      to={"/dashboarduser"} 
                      className='whitespace-nowrap hover:bg-slate-100 p-2 block' 
                      onClick={handleUserIconClick} 
                    >
                      User Dashboard
                    </Link>
                  )}
                </nav>
              </div>
            )}
          </div>

          
          <div>
            {user?._id ? (
              <button 
                onClick={handleLogout} 
                className='px-3 py-1 rounded-full text-white bg-teal-400 hover:bg-teal-500'
              >
                Logout
              </button>
            ) : (
              <Link 
                to={"/login"} 
                className='px-3 py-1 rounded-full text-white bg-teal-400 hover:bg-teal-500'
              >
                Login
              </Link>
              
              
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
