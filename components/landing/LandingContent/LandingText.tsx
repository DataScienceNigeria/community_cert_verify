import React from 'react'
import { RiDeviceRecoverFill } from "react-icons/ri";
import { MdSwitchAccessShortcutAdd } from "react-icons/md";
import { FiCheckSquare } from "react-icons/fi";



export const HeroText = [
    {
        title: "Data Science Nigeria Consolidated Certificate Portal",
        subtitle: 'Access and Certify Certificate with',
        buttonText: 'Verify Now',
        buttonLink: '/student_login',
        image: "/certVerify.png"    
    },
    {
        title: "Data Science Nigeria Consolidated Certificate Portal",
        subtitle: 'Certificate Confirmation made',
        buttonText: 'Access Certtificate Now',
        buttonLink: '/student_login',
        image: "/certVerify2.png"
    },
]


interface CardTextType {
    title: string;
    subtitle: string;
    color: string;
    icon: any;
}


export const CardText: CardTextType[] = [
    {
        subtitle: "Getting your Certificate has never been simpler! Follow a few easy steps to begin.",
        title: 'Access',
        color: '#66AC66',
        icon: <MdSwitchAccessShortcutAdd size={40} color='black'/>
    },
    {
        subtitle: "A secure and intelligent way for institutions and individuals to verify certificates.",
        title: 'Verification',
        color: '#CEE5CE',
        icon: <FiCheckSquare size={40} color='black' />,
    },
    {
        subtitle: "Retrieve your forgotten certficate details in just seconds!",
        title: 'Recovery',
        color: 'green',
        icon: <RiDeviceRecoverFill size={40} color='#66AC66' />
    },
]