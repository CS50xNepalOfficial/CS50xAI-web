import React from 'react'
import InstructorCard from './instructor_card'


import { instructorList } from './instructor'

export default function Instructor() {

    return (
        <div className='w-full mx-auto text-center  relative top-20'>
            <h1 className='text-4xl p-5 font-bold'>
                Meet our Instructors
            </h1>
            <div className='w-3/4 mx-auto grid grid-cols-3 gap-8 mt-9'>
                {instructorList.map((instructor, index) => (
                    <InstructorCard key={index} avatar={instructor.avatar} title={instructor.title} description={instructor.description} />
                ))}
            </div>
        </div>
    )
}
