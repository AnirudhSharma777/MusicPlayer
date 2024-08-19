import React, { useState } from 'react';
import Logo from '../../assets/logo.png';
import { CgProfile } from "react-icons/cg";


const Sidebar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleComponent = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='w-25 place-items-start h-full relative'>
            <div className='p-2'>
                <nav className='flex flex-col justify-between p-3 h-auto'>
                    <div className='flex gap-2 items-center'>
                        <img src={Logo} alt="logo" width={40} height={40} onClick={() => window.onload()}/>
                        <h1 className='text-xl md:text-3xl text-green-500 font-bold lg:block hidden'>Spotify</h1>
                    </div>
                    <div className='mb-5 absolute bottom-3 left-4'>
                        <CgProfile
                            size={25}
                            className='rounded-full text-white cursor-pointer'
                            onClick={toggleComponent}
                        />
                    </div>


                </nav>
            </div>
        </div>
    );
};

export default Sidebar;
