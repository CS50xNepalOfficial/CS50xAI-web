import React from 'react'
import { OurTeamCrousel } from './our_team_crousel'

export default function Team() {
    return (
        <div className='w-full mx-auto flex flex-col items-center justify-center h-full relative top-24'>
            <h1 className="flex text-4xl font-semibold">
                Our Energetic Team
            </h1>
            <div className="">
                <div className="mx-auto   px-8 lg:px-8">
                    <p className="p-9 w-3/4 mx-auto  leading-8 text-white text-center">
                        We are the 10th executive committee of EXCESS and the very first
                        group of students to bring CS50 in Nepal. We are passionate about
                        computer science and want to share our knowledge with others.
                    </p>
                </div>
            </div>
            <OurTeamCrousel />
        </div>
    )
}
