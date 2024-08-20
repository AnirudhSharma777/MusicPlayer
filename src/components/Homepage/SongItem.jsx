import AudioDuration from './AudioDuration';



const SongItem = ({ item, playSong, isActive }) => {

  
  return (
    <div
      key={item.id}
      className={`mb-2 flex justify-between p-2 border-3 shadow-lg cursor-pointer ${isActive ? 'bg-transparent border-l-green-400 ' : 'bg-transparent'}`}
      onClick={() => playSong(item.url)}
    >
      <div className='flex flex-row gap-2 items-center'>
        <div className='rounded-full w-12 h-12 overflow-hidden'>
          <img
            src={`https://cms.samespace.com/assets/${item.cover}`}
            alt=""
            className='w-full h-full object-cover shadow rounded-full'
          />
        </div>
        <div>
          <h4 className='text-white text-xl'>{item.name}</h4>
          <p className='text-neutral-300 text-[15px]'>{item.artist}</p>
        </div>
      </div>
      <div className={`text-neutral-300 text-[1rem]   `}>
        <AudioDuration url={item.url}   />
      </div>
    </div>
  );
};

export default SongItem;