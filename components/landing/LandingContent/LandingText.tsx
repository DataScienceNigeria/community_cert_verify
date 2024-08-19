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


interface ProgramTextType {
    image: any
    heading: string
    smallText: string
    bigText: string
    color: string
}

export const Programs: ProgramTextType[] = [
    {
        image: "/card/arewa4tech.png",
        heading: 'Arewa Ladies4Tech',
        color: 'green',
        smallText: 'Arewa Ladies4Tech, an intervention of Data Science Nigeria/DSNai, is dedicated to empowering the women of Northern Nigeria',
        bigText: 'Inspiring them to lead, innovate, and shape a brighter future. Our program focuses on harnessing the potential of the evolving digital landscape, offering essential AI skills that unlock limitless opportunities in today’s  digital era.'
    },
    {
        image: "/card/community.png",
        heading: 'DSN AI Community',
        color: '#66AC66',
        smallText: 'A friendly community where you can learn and grow with others.',
        bigText: 'Stay updated on new trends and receive helpful guidance to improve your skills. Enjoy the journey of learning, collaborating, and innovating as we build the future of technology together. Engage in discussions, share your ideas, and be inspired by the collective knowledge of the group.'
    },
    {
        image: "/card/ladies.png",
        heading: 'DSN Ladies In AI',
        color: '#CEE5CE',
        smallText: 'A community commited to promoting gender inclusion that embraces professionals, enthusiasts, learners, and novices from diverse backgrounds',
        bigText: 'At DSN, we firmly advocate that diversity fuels innovation and advancement. Hence, we endeavour to provide a platform where individuals of all genders feel empowered to pursue their interests in data science, artificial intelligence, and related domains. Our inclusive community not only offers valuable mentorship and guidance but also fosters collaboration and mutual support among its members..'
    },
]