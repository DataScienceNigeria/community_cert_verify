import React, { useEffect, useState } from 'react'
import {getOneAdmin} from '@/utils/queries/admins/manipulateAdmins'
import Link from 'next/link';

type adminDeTailsType = {
  id: string;
  email: string;
  name: string | null;
  role: string | null;
  password: string;
  createdAt: Date | null;
  phone: string | null;
  updatedAt: Date | null;
} | null


const UserProfile =   () => {

  const [adminDeTails, setAdminDeTails] = useState<adminDeTailsType>(null);

  const getAdmin = async () => {
    const adminDeTails =  await getOneAdmin({email: "teju@datasciencenigeria.ai"});
    setAdminDeTails(adminDeTails)

  }

  useEffect(() => {
    getAdmin();
  }, [])



  
  
  return (
    <>
      <div className='flex justify-between items-center'>
        <span>Name</span>
        <span>{adminDeTails?.name}</span>
      </div>
      <div className='border-t border-gray-300 my-4'></div>

      <div className='flex justify-between items-center'>
        <span>Email</span>
        <span className='self-end text-left'>{adminDeTails?.email}</span>
      </div>
      <div className='border-t border-gray-300 my-4'></div>

      <div className='flex justify-between items-center'>
        <span>Role</span>
        <span>{adminDeTails?.role}</span>
      </div>
      <div className='border-t border-gray-300 my-4'></div>

      <div className='flex justify-between items-center'>
        <span>Phone Number</span>
        <span>09038433047</span>
      </div>
      <div className='border-t border-gray-300 my-4'></div>


     { 
      <Link href="/admins"  className='text-xs md:text-sm text-center text-white bg-green-800 rounded-xl hover:bg-green-500 transition-all active:bg-green-600 p-4'>Edit Details</Link>
    }
    </>
  )
}

export default UserProfile