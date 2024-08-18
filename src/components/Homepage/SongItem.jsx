import AudioDuration from './AudioDuration';

const SongItem = ({ item, playSong, isActive }) => {
    return (
      <div 
        key={item.id} 
        className={`mb-3 flex justify-between p-1 border-3 shadow-inner cursor-pointer ${isActive ? 'border-1 border-white ' : 'border-none'}`}
        onClick={() => playSong(item.url)}
      >
        <div className='flex flex-row gap-2'>
          <div className='rounded-full w-12 h-12 overflow-hidden'>
            <img 
              src={`https://cms.samespace.com/assets/${item.cover}`} 
              alt=""  
              className='w-full h-full object-cover shadow rounded-full'
            />
          </div>
          <div>
            <h4 className='text-white text-xl'>{item.name}</h4>
            <p className='text-neutral-500 text-[15px]'>{item.artist}</p>
          </div>
        </div>
        <div className={`text-neutral-200 text-[1rem] p-2  `}>
          <AudioDuration url={item.url}/>
        </div>
      </div>
    );
  };

  export default SongItem;