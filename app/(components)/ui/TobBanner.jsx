import React from 'react'

const TobBanner = () => {
    return (
        <section className='bg-jet-black text-white py-4 gap-2 flex items-center justify-center'>
            <div className='w-2.5 h-2.5 bg-[#00FF49] rounded-full'></div>
            <p>
                We’re taking new projects for July
            </p>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.4302 5.93018L20.5002 12.0002L14.4302 18.0702" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M3.5 12H20.33" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
            </svg>

        </section>
    )
}

export default TobBanner