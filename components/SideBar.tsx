"use client";

import React from 'react'
import { usePathname } from 'next/navigation';
import { types } from 'util';
import Link from 'next/link';
import path from 'path';

// Icons 
import { LuLayoutDashboard } from "react-icons/lu";
import { GrUserAdmin } from "react-icons/gr";
import { PiUploadSimpleBold } from "react-icons/pi";
import { LiaCertificateSolid } from "react-icons/lia";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import { IoSettingsOutline } from "react-icons/io5";





export const sideNav = [
    {
        title: 'Dashboard',
        icon: LuLayoutDashboard,
        path: '/dashboard'
    },
    {
        title: 'Admins',
        icon: GrUserAdmin,
        path: '/admins'
    },
    {
        title: 'Uploads',
        icon:  PiUploadSimpleBold,
        path: '/uploads'
    },
    {
        title: 'Certificates',
        icon: LiaCertificateSolid,
        path: '/certificates'
    },
    {
        title: 'Analytics',
        icon: TbBrandGoogleAnalytics,
        path: '/analytics'
    },
    {
        title: 'Settings',
        icon: IoSettingsOutline,
        path: '/settings'
    },
]

const SideBar = () => {

    const pathname: string = usePathname();
    console.log(pathname)
    
  return (
    
    <div className='w-[20%] hidden md:flex flex-col justify-center bg-white h-screen'>

        {
            sideNav.map((item, index) => (
                <div key={index} className={`flex items-center   p-4 hover:border-b-2 cursor-pointer transition-all ${pathname === item.path ? 'bg-green-500 text-white' : 'bg-white'} font-semibold`}>       
                    <Link href={item.path} className='flex items-center gap-x-4 justify-between'>
                        <item.icon />
                        <span>{item.title}</span>
                    </Link>
                </div>
            ))
        }

    </div>
  )
}

export default SideBar