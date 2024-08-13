import Link from 'next/link'
import React from 'react'
import { FiFacebook, FiInstagram, FiLinkedin, FiTwitter, FiYoutube } from 'react-icons/fi'

const Footer = () => {
  return (
    <footer className='pt-20 py-4 border-t-2'>
      <div className='flex flex-col md:flex-row items-center justify-between'>
      <div className=''>
        <div className='mb-8 space-y-4'>
          <h3 className='text-green-dsn font-bold'>About DSN</h3>
          <p className='max-w-[700px] text-black/50'>
          Data Science Nigeria (DSN) is Africa’s foremost AI and Data Science organisation, dedicated to talent development and sector-specific solutions. With a strong presence across the continent, we lead a diverse community of AI professionals, enthusiasts, and beginners from both Anglophone and Francophone nations. Our mission is to nurture 1 million AI talents and position Africa at the forefront of the global AI landscape.
          </p>
        </div>
      </div>

      <div className='flex flex-col md:flex-row justify-between items-center gap-4'>
          <span>Connect with us</span>
          <div className='flex justify-center items-center gap-4 text-green-dsn'>
            <Link href="https://web.facebook.com/dsnailive?_rdc=1&_rdr" target='_blank'>
              <FiFacebook size={25} className='cursor-pointer'  href=''/>
            </Link>
            <Link href="https://www.instagram.com/dsn_ai_network/" target='_blank'>
              <FiInstagram size={25} className='cursor-pointer'/>
            </Link>
            <Link href="https://www.linkedin.com/company/dsnai/mycompany/" target='_blank'>
              <FiLinkedin size={25} className='cursor-pointer' />
            </Link>
            <Link href="https://x.com/dsn_ai_network" target='_blank'>
              <FiTwitter size={25} className='cursor-pointer' fill='green'/>
            </Link>
            <Link href="https://www.youtube.com/@dsnai" target='_blank'>
              <FiYoutube size={25} className='cursor-pointer'/>
            </Link>
          </div>
      </div>
      </div>
    </footer>
  )
}

export default Footer