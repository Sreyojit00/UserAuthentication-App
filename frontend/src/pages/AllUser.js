import React, { useEffect, useState } from 'react';
import SummaryApi from '../common';
import { toast } from 'react-toastify';
import moment from 'moment';



const AllUsers = () => {
    const [allUser, setAllUsers] = useState([]);
    
  
    const fetchAllUsers = async () => {
        const fetchData = await fetch(SummaryApi.allUser.url, {
            method: SummaryApi.allUser.method,
            credentials: 'include'
        });

        const dataResponse = await fetchData.json();

        if (dataResponse.success) {
            setAllUsers(dataResponse.data);
        }

        if (dataResponse.error) {
            toast.error(dataResponse.message);
        }
    };

    useEffect(() => {
        fetchAllUsers();
    }, []);

    return (
        <div className='bg-white p-4 rounded-lg shadow-md'>
            <h1 className='text-2xl font-semibold mb-4'>All Users</h1>
            <table className='min-w-full bg-white border border-gray-200 rounded-lg overflow-hidden'>
                <thead>
                    <tr className='bg-teal-500 text-white'>
                        <th className='px-4 py-2 text-left'>Sr.</th>
                        <th className='px-4 py-2 text-left'>Name</th>
                        <th className='px-4 py-2 text-left'>Email</th>
                        <th className='px-4 py-2 text-left'>Role</th>
                        <th className='px-4 py-2 text-left'>Created Date</th>
                        <th className='px-4 py-2 text-left'>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {allUser.map((el, index) => (
                        <tr key={el._id} className='hover:bg-gray-100 even:bg-gray-50'>
                            <td className='px-4 py-2 border-b border-gray-200'>{index + 1}</td>
                            <td className='px-4 py-2 border-b border-gray-200'>{el?.name}</td>
                            <td className='px-4 py-2 border-b border-gray-200'>{el?.email}</td>
                            <td className='px-4 py-2 border-b border-gray-200'>{el?.role}</td>
                            <td className='px-4 py-2 border-b border-gray-200'>{moment(el?.createdAt).format('LL')}</td>
                            
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    );
};

export default AllUsers;
