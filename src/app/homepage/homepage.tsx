
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'
import Duck from "@/assets/homepage/duck-img.png"
import Link from 'next/link'

export default function HomepageIntro() {
    return (
        <div className='h-screen w-full mx-auto flex'>
            <div className='flex items-center justify-around '>
                <div className='flex justify-center items-start flex-col w-1/2 '>
                    <div className='flex items-start justify-center flex-col'>
                        <h1 className='text-7xl font-bold text-center'>CS50xNepal</h1>
                        <p className='py-5 text-justify text-xl'>The world-famous “CS50 lectures” offered at Harvard and Yale University is now in Nepal for the good. And for the first time, its happening right at IOE Purwanchal Campus.</p>
                    </div>
                    <div className=' p-4'>
                        <p className='text-yellow-400 text-3xl font-bold font-mono'>Introducing <span>CS50XAi</span> </p>
                        <Link href='/cs50xAi'>
                        <Button variant="secondary">
                            Register
                        </Button>
                        </Link>
                    </div>
                </div>
                <div className='flex justify-center'>
                    <div>
                        <Image src={Duck} alt='Duck' width={400} height={500} />
                    </div>
                </div>
            </div>
        </div>
    )
}
