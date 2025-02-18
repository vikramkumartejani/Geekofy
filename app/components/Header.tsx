import Image from 'next/image'
import React from 'react'

const Header: React.FC = () => {
    return (
        <div className='mx-auto w-full px-4 py-3 sm:py-6 md:px-8 lg:p-[28px] mb-5 sm:mb-[50px]'>
            <div className='flex justify-end items-center gap-6 md:gap-8'>
                <div className='items-center md:gap-8 md:flex hidden'>
                    <button className='mb-0.5 p-2.5 transition-all duration-300 hover:bg-black/10 rounded-md font-semibold text-base border border-black-60 text-black/60'>
                        Add Business
                    </button>
                    <button>
                        <Image src='/assets/icons/not-signed-in.svg' alt='not-signed-in' width={50} height={50} />
                    </button>
                </div>
                <div className='items-center md:gap-8 flex md:hidden w-full justify-between'>
                    <h1 className="text-[36px] text-center text-primary-blue font-extrabold">Geekofy</h1>
                    <button>
                        <Image src='/assets/icons/menu.svg' alt='menu' width={30} height={32} />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Header