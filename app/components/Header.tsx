import Image from 'next/image'
import React from 'react'

const Header: React.FC = () => {
    return (
        <div className='max-w-[1536px] mx-auto w-full px-4 py-6 md:p-10 lg:p-[50px] mb-5 sm:mb-[50px]'>
            <div className='flex justify-end items-center gap-10'>
                <button className='p-2.5 transition-all duration-300 hover:bg-black/10 rounded-md font-semibold text-base border border-black-60 text-black/60'>
                    Add Business
                </button>
                <button>
                    <Image src='/assets/icons/not-signed-in.svg' alt='not-signed-in' width={50} height={50} />
                </button>
            </div>
        </div>
    )
}

export default Header