// Icons 
import { LuLayoutDashboard } from "react-icons/lu";
import { GrUserAdmin } from "react-icons/gr";
import { PiUploadSimpleBold } from "react-icons/pi";
import { LiaCertificateSolid } from "react-icons/lia";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import { IoExitOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";

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
      title: 'Profile',
      icon: CgProfile,
      path: '/profile'
  },
  {
      title: 'Sign Out',
      icon: IoExitOutline,
      path: '/signout'
  },
]