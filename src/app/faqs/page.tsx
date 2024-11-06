import React from 'react'
import FAQcomponent from './faqs'
import { FAQList } from './faq_list'

export default function FrequentlyAskedQuestion() {
    return (
        <div className='top-24 relative'>
            <FAQcomponent FAQs={FAQList} />
        </div>

    )
}
