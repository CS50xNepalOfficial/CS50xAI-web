import React from 'react';
import Image from 'next/image';
import TU from '@/assets/sponsers/TU-Logo.png'
import Github from '@/assets/sponsers/github-education.png'
import Dharan from '@/assets/sponsers/dharan.png'
import MLSA from '@/assets/sponsers/MLSA.png'
import LeapFrog from '@/assets/sponsers/lf-logo.svg'


export default function Sponsered() {
  return (
    <div className='h-56 w-full relative'>
      <main className=' bg-gray-800 flex w-full' >
        <div className='flex flex-col mx-auto items-center w-full'>
          <h1 className='text-4xl font-bold p-6'>
            We are Supported by
          </h1>
          <div className='flex justify-evenly items-center w-full space-y-6'>
            <Image src={TU} alt='TU' width={100} height={150} />
            <Image src={Github} alt='Github' width={100} height={150} />
            <Image src={Dharan} alt='Dharan' width={100} height={150} />
            <Image src={MLSA} alt='MLSA' width={100} height={150} />
            <Image src={LeapFrog} alt='LeapFrog' width={100} height={150} />
          </div>
        </div>
      </main>
    </div>
  )
}
