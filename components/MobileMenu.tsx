"use client";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { TiThMenu } from "react-icons/ti";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { signOut } from 'next-auth/react';

interface MobileMenuProps {
  navs: {
    title: string;
    icon?: any;
    path: string;
  }[];
}


export function MobileMenu( {navs}: MobileMenuProps ) {

  const pathname: string = usePathname();

  const handleSignOut = (e: any) => {
    e.preventDefault();
    signOut({ callbackUrl: '/login',  redirect:true  });
}
  
  return (
    <Sheet>
      <SheetTrigger asChild>
          <TiThMenu className='text-2xl'/>
      </SheetTrigger>
      <SheetContent side="left" className="bg-white p-0 flex items-center flex-col justify-center">
      {
        navs.map((item, index) => (
            <div key={index} className={`w-full flex items-center rounded-xl p-2 pl-8 hover:border-b-2 mx-4 cursor-pointer transition-all ${pathname === item.path ? 'bg-green-dsn text-white' : 'bg-white'} font-semibold`}>       
                <Link href={item.path} className='self-center flex items-center gap-x-8 justify-between' onClick={item.title === 'Sign Out' ? handleSignOut : undefined}>
                   {item.icon && <item.icon />}
                    <span>{item.title}</span>
                </Link>
            </div>
        ))
        }
      </SheetContent>
    </Sheet>
  )
}
