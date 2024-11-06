import Image from 'next/image'
import React from 'react'

import { IInstructorCard } from '../types/Instructor_card_type'

export default function InstructorCard({ avatar, title, description }: IInstructorCard) {
    return (
        <div className='bg-black rounded-xl '>
            <div className="flex flex-col items-center rounded-3xl">
                <Image src={avatar} alt={title} width={200} height={200} className='bg-blue-300 rounded-full ' />
                <div className="text-lg font-bold p-5">{title}</div>
                <div className="text-sm text-gray-400 mb-5 p-3 text-justify">{description}</div>
            </div>
        </div>
    )
}
