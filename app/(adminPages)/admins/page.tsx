import React from 'react'
import AdminTable from '@/components/AdminTable'

const page = () => {
  return (
    <div className='relative flex justify-center items-center h-[calc(100%-100px)] mt-20 text-xs md:text-lg md:mt-0'>
      <AdminTable />
    </div>
  )
}

export default page