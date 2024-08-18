import React from 'react'
import Logo from '../../assets/logo.png'
import { CgProfile } from "react-icons/cg";

const Sidebar = () => {
    return (
        <div className='w-25 place-items-start'>
            <div className='p-2'>
                <nav className='flex flex-col justify-between p-3 h-screen'>
                    <div className='flex gap-2 items-center'>
                        <img src={Logo} alt="logo" width={40} height={40} />
                        <h1 className='text-xl md:text-3xl text-green-500 font-bold sm:block hidden'>Spotify</h1>
                    </div>
                    <div className='mb-5'>
                        <CgProfile className='rounded-full text-white sm:size-8 size-5 hover:size-10' />
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Sidebar