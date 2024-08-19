import React, { useContext, useState } from 'react';
import Logo from '../../assets/logo.png';
import { CgProfile } from "react-icons/cg";
import { DataContext } from '../../context/ApiContext';
import { Link } from "react-router-dom";

const Sidebar = () => {
    const { bgColor } = useContext(DataContext);
    const [isOpen, setIsOpen] = useState(false);

    const toggleComponent = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='w-25 place-items-start h-full relative'>
            <div className='p-2'>
                <nav className='flex flex-col justify-between p-3 h-auto'>
                    <div className='flex gap-2 items-center'>
                        <img src={Logo} alt="logo" width={40} height={40} />
                        <h1 className='text-xl md:text-3xl text-green-500 font-bold lg:block hidden'>Spotify</h1>
                    </div>
                    <div className='mb-5 absolute bottom-5 left-4'>
                        <CgProfile
                            className='rounded-full text-white cursor-pointer'
                            onClick={toggleComponent}
                        />
                    </div>

                    {isOpen && (
                        <div 
                            className='absolute bottom-16 left-4 p-4 rounded-md shadow-lg border border-white' 
                            style={{ backgroundColor: bgColor[0] || '#333', zIndex: 10 }}
                        >
                            {/* <div>
                                <Link to="/profile" className='text-white'>
                                    Profile
                                </Link>
                            </div> */}
                            {/* Add more options here if needed */}
                        </div>
                    )}
                </nav>
            </div>
        </div>
    );
};

export default Sidebar;
