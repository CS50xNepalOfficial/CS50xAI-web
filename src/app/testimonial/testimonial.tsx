import React from 'react'
import { testimonialsList } from './testimonialList'
import { TestimonialCrousel } from '@/component/testimonial_crousel'


export default function Testimonial() {
    return (
        <div className='overflow-x-hidden w-screen mt-20 mx-auto relative top-20 mb-16 py-3'>
            <h1 className='text-center text-4xl font-semibold p-6'>Testimonial</h1>
            <TestimonialCrousel
                items={testimonialsList}
                direction="left"
                speed="slow"
            />
        </div>
    )
}
