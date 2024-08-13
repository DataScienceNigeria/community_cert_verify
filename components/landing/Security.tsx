import React from 'react'
import { GiPadlockOpen } from "react-icons/gi";


const Security = () => {
  return (
    <section className='flex flex-col md:flex-row justify-between items-center py-4 my-20'>
      <div className='space-y-8'>
        <h5 className='font-semibold text-[34px] text-green-dsn'>
          Security is our top priority
        </h5>
        <p className='max-w-[700px] text-black/50 md:text-justify'>
          Our platform implements strict access controls over certificate visibility and accessibility. Experience real-time availability for review, uploading, and downloading of certificates, guaranteeing a secure Verification process.
        </p>
      </div>

      <div className='flex-grow self-center text-center'>
        <GiPadlockOpen size={120} className='ml-[10%] md:ml-[40%]' color='#FF0000'/>
      </div>
    </section>
  )
}

export default Security