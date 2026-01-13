import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    
        <footer className="bg-white fixed bottom-0 right-0 left-0 z-30">
            <div className='flex justify-center items-center space-x-4 md:space-x-10 py-4 m-auto max-w-[350px]'>
              <div className='self-start flex items-center justify-center'>
                <span className="text-center p-4 text-xs md:text-sm">All Rights Reserved. &copy; 2024 -
                <a href="/"><strong>Data Science Nigeria</strong></a></span>
              </div>
               
              <Image 
                src="/logo.png"
                alt='Logo'
                width={100}
                height={100}
                className='object-contain self-end pb-4'
              />
            </div>
        </footer>
  )
}

export default Footer