'use client';

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import logo from '@/assets/logo/logo.svg'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { usePathname } from 'next/navigation';

import {
    AiOutlineYoutube, AiOutlineMenu,
    AiOutlineClose
} from 'react-icons/ai';

export default function Navbar() {
    const pathName = usePathname();

    const [isOpen, setIsOpen] = useState(false);


    const isActive = (path: string) => {
        return pathName === path ? 'text-green' : 'text-green';
    }



    const handleToggle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <nav className="py-3 flex  md:justify-evenly justify-between bg-black  w-full px-2 gap-x-14 fixed z-50    md:items-center   ">
            <Link href='/' className=''>
                <Image src={logo} alt='logo' height={40} />
            </Link>

            <ul className={`sm:flex space-x-7 text-lg  ${isOpen ? 'flex flex-col items-center justify-evenly h-80 left-1/2 transform -translate-x-1/2 absolute bg-navbarbg text-center top-16  w-full ' : 'hidden'}`}>
                <div className='sm:flex sm:items-center sm:justify-center sm:gap-5 '>
                    <Link href='/'>
                        <li className={isActive('/')} >Home</li>
                    </Link>
                    <Link href='/courses'>
                        <li className={`${isActive('/courses')} sm:my-0 my-3`}>Courses</li>
                    </Link>
                    <Link href='/instructor'>
                        <li className={`${isActive('/instructor')} sm:my-0 my-3`}>Instructor</li>
                    </Link>
                    <Link href='/team'>
                        <li className={`${isActive('/team')} sm:my-0 my-3`}>Our Team</li>
                    </Link>
                    <Link href='/faqs'>
                        <li className={`${isActive('/faqs')} sm:my-0 my-3`}>FAQs</li>
                    </Link>
                    <Link href='/aboutus'>
                        <li className={`${isActive('/aboutus')} sm:my-0 my-3`}>About</li>
                    </Link>
                    {isOpen && <Link href='/https://www.youtube.com' passHref className='sm:block hidden'>
                        <Button
                            className="rounded-md mt-1"
                            size="default"
                            variant="destructive"
                        >
                            <AiOutlineYoutube className="" />
                            <span className="ml-2">Subscribe</span>
                        </Button>
                    </Link>}
                </div>
            </ul>

            <Link href='https://www.youtube.com' passHref className='sm:block hidden'>
                <Button
                    className="rounded-md mt-1"
                    size="default"
                    variant="destructive"
                >
                    <AiOutlineYoutube className="text-white" />
                    <span className="text-white ml-2">Subscribe</span>
                </Button>
            </Link>
            <div className='sm:hidden block'>
                {isOpen ? <AiOutlineClose onClick={handleToggle} /> : <AiOutlineMenu onClick={handleToggle} />}
            </div>
        </nav>
    )
}