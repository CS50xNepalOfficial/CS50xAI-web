import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { TeamMemberList} from "./team_member_list"
import Image from "next/image"

export function OurTeamCrousel() {
    return (
        <Carousel
            opts={{ align: "start" }}
            className=" w-3/4 mx-auto">
            <CarouselContent>
                {TeamMemberList.map((member, index) => (
                    <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                        <div className="p-1 ">
                            <Card>
                                <CardContent className="flex aspect-square items-center justify-center p-6 flex-col">
                                    <Image src={member.imageUrl} alt={member.name} width={200} height={200} className="rounded-full m-2"/>
                                    <h1 className="p-2">{member.name}</h1>
                                    <p className=" text-red-600">{member.role}</p>

                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}
