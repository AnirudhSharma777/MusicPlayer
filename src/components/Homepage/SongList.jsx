import React, { useContext, useState } from 'react';
import { DataContext } from '../../context/ApiContext';
import { MusicPlayerContext } from '../../context/ControlContext'; // Import MusicPlayerContext
import { BsSearch } from "react-icons/bs";
import SongItem from './SongItem';

const SongList = () => {
  const { data } = useContext(DataContext);
  const { playSong, currentTrack } = useContext(MusicPlayerContext); // Use MusicPlayerContext
  const [toggle, setToggle] = useState(false);

  const toggleHandler = () => {
    setToggle(!toggle);
  };

  return (
    <div className="px-12 py-8 -ml-3 sm:ml-0">
      <div className={`${!toggle ? 'text-white' : 'text-neutral-500'} text-xl font-semibold flex space-x-5 mb-4`}>
        <h1>For You</h1>
        <h1 
          className={`${toggle ? 'text-white' : 'text-neutral-500'} cursor-pointer hover:shadow`} 
          onClick={toggleHandler}
        >
          Top Tracks
        </h1>
      </div>
      <div className="relative w-full flex items-center mb-6 border rounded-md">
        <BsSearch className="absolute right-3 ml-3 text-white" />
        <input
          type="text"
          className="rounded focus:outline-0 px-4 py-2 w-full bg-transparent border-transparent text-white"
          placeholder="Search Song, Artist"
        />
      </div>

      <div className='mt-1 w-full border border-transparent shadow rounded-lg'>
        {data.map((item) => (
          <SongItem
            key={item.id}
            item={item}
            playSong={() => playSong(item)} 
            isActive={currentTrack?.id === item.id}
          />
        ))}
      </div>
    </div>
  );
};

export default SongList;
