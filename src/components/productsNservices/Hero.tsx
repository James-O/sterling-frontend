import React from 'react'
import { PageHeader } from '../partials'

export default function Hero() {
    return (
        <div>
            <div className='relative'>
                <div>
                    <img src="/images/grid.jpg" alt="hero"
                        className='w-full h-[620px]'
                    />
                </div>
                <div className='absolute top-10 grid grid-cols-12 w-full'>
                    <div className='col-span-9'>
                        {/* <h1 className='text-white text-3xl font-bold'>
                            Powering Utility Innovation  ││           Across Africa
                        </h1> */}
                        <PageHeader
                        heading="Products & Services"
                        className="bg-inherit text-white"
        //                 body="Sterling Technology and Systems Limited is a leading provider of utility management technology solutions across
        // Africa. Our integrated portfolio of products and services empowers electricity distribution companies, service
        // operators, and institutions with the tools to drive efficiency, revenue growth, and superior customer experience."
                        body="Sterling Technology and Systems Limited delivers integrated 
                            portfolio of products and services that empower electricity 
                            distribution companies with tools to drive efficiency, 
                            revenue growth, and superior customer experience.
                        "
                        cta="Let's Talk Now"
                        link="/contact"
                    />
                    </div>
                    <div className='top-0 right-0 absolute text-white col-span-2'>
                        <img src="/images/meter2.png" alt="meter"/>
                        <h1 className='mt-[-25%] right-40 absolute font-bold text-4xl'>Our meter</h1>
                    </div>
                </div>
            </div>

        </div>
    )
}
