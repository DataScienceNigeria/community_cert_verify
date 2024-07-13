import React from 'react'
import {data} from "@/db/data";
import NavBar from '@/components/NavBar';

const page = () => {
  return (
          
      <div className='flex flex-col md:flex-row  items-center justify-center gap-x-2 space-y-4 md:space-y-0 h-[calc(100vh-100px)] md:pr-4'>
        <div className='w-full md:w-1/3  h-[100px] border flex justify-center items-center bg-gray-500'>
          <h1 className='text-xl font-bold'>Super Admin</h1>
        </div>

        <div className='w-full md:w-1/3  h-[100px] border flex justify-center items-center bg-gray-500'>
          <h1 className='text-xl font-bold'>Admin</h1>
        </div>

        <div className='w-full md:w-1/3  h-[100px] border flex justify-center items-center bg-gray-500'>
          <h1 className='text-xl font-bold'>Certificates count</h1>
        </div>
      </div>
  )
}

export default page

