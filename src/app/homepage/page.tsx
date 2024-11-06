
import React from 'react'
import AboutUs from '../aboutus/page'
import Instructor from '../instructor/page'
import Testimonial from '../testimonial/testimonial'
import SponserPage from '../sponser/page'
import Faqs from '../faqs/faqs'
import Team from '../team/page'

import { FAQList } from '../faqs/faq_list'
import HomepageIntro from './homepage'
import FrequentlyAskedQuestion from '../faqs/page'


export default function Homepage() {
    return (
        <div className='overflow-hidden'>
            <HomepageIntro />
            <div className=''>
                <AboutUs />
            </div>
            <div>
                <Instructor />
            </div>
            <div>
                <SponserPage />
            </div>
            <div>
                <FrequentlyAskedQuestion />
            </div>
            <div>
                <Team />
            </div>
            <div>
                <Testimonial />
            </div>
        </div>
    )
}
