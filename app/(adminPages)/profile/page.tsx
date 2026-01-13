"use client";

import React from 'react'
import UserProfile from '@/components/UserProfile'

const Profile = () => {

  return (
    <div className='grid place-content-center'>
        <div className='w-[380px] md:w-[700px] border bg-white p-8 md:p-4 text-sm md:text-lg rounded-xl'>
          <UserProfile />
        </div>
      </div>
  )
}

export default Profile;