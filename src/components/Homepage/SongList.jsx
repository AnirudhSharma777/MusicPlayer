import React, { useContext, useState } from 'react';
import { DataContext } from '../../context/ApiContext';
import { MusicPlayerContext } from '../../context/ControlContext'; // Import MusicPlayerContext
import { BsSearch } from "react-icons/bs";
import SongItem from './SongItem';

const SongList = () => {
  const { data } = useContext(DataContext);
  const { playSong, currentTrack } = useContext(MusicPlayerContext);
  const [toggle, setToggle] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredData = data.filter(item => {
    const title = item.name ? item.name.toLowerCase() : '';
    const artist = item.artist ? item.artist.toLowerCase() : '';
    const query = searchQuery.toLowerCase();

    const matchesSearch = title.includes(query) || artist.includes(query);
    const matchesTopTracks = toggle ? item.top_track === true : true;

    return matchesSearch && matchesTopTracks;
  });

  return (
    <div className="px-12 py-8 -ml-3 sm:ml-0 h-full w-full">
      <div className={`${!toggle ? 'text-white' : 'text-neutral-500'} text-xl font-semibold flex space-x-5 mb-4`}>
        <h1 className={`${!toggle ? 'text-white' : 'text-neutral-500'} cursor-pointer hover:shadow`}
          onClick={() => setToggle(false)}>For You</h1>
        <h1 className={`${toggle ? 'text-white' : 'text-neutral-500'} cursor-pointer hover:shadow`}
          onClick={() => setToggle(true)}>Top Tracks</h1>
      </div>

      {/* Search Bar */}
      <div className="relative w-full flex items-center mb-6 border rounded-md">
        <BsSearch className="absolute right-3 ml-3 text-white" />
        <input
          type="text"
          className="rounded focus:outline-0 px-4 py-2 w-full bg-transparent border-transparent text-white"
          placeholder="Search Song, Artist"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)} // Update search query
        />
      </div>

      <div className={`mt-1 w-full border border-transparent shadow rounded-lg ${filteredData.length > 7 ? 'h-96 overflow-y-scroll custom-scrollbar' : ''
        }`}>
        {filteredData.map((item) => (
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
