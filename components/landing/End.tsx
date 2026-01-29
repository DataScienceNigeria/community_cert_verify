import React from 'react'

const End = () => {
  return (
    <>
       <div className='bg-green-dsn flex flex-col md:flex-row justify-between items-center py-8 px-[3rem] md:px-[6rem]'>
        <p className='text-white'>
          2024 All Rights Reserved
        </p>
        <div className='space-x-8 text-center space-y-4'>
          <a href='https://equalyz.ai/terms-of-service' className='text-white'>Terms of Service </a>
          <a href='https://equalyz.ai/privacy-policy/' className='text-white'>Privacy Policy </a>
          <a href='https://equalyz.ai/cookie-policy/' className='text-white'>Cookie Policy</a>
        </div>
      </div>
      <p className='text-black/50 text-xs text-center pt-2'>DEVELOPED BY <strong>DSN SOFTWARE DEVELOPERS</strong> | © {new Date().getFullYear()}</p>

    </>
  )
}

export default End