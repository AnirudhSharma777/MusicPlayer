import React, { useContext, useEffect } from 'react';
import { MusicPlayerContext } from '../../context/ControlContext';
import { FaStepBackward, FaStepForward, FaPause, FaPlay } from 'react-icons/fa';
import { PiDotsThreeOutlineVertical } from "react-icons/pi";

const MusicCard = () => {
    const {
        isPlaying,
        currentTrack,
        volume,
        handleVolumeChange,
        audioRef,
        handlePlayPause,
        currentTime,
        duration,
        handleSliderChange,
        handleTimeUpdate,
        handleLoadedMetadata
    } = useContext(MusicPlayerContext);

    useEffect(() => {
        const audio = audioRef.current;
        if (audio) {
            audio.addEventListener('timeupdate', handleTimeUpdate);
            audio.addEventListener('loadedmetadata', handleLoadedMetadata);
            return () => {
                audio.removeEventListener('timeupdate', handleTimeUpdate);
                audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
            };
        }
    }, [audioRef, handleTimeUpdate, handleLoadedMetadata]);

    // Log currentTrack to verify if it's being set correctly
    console.log("Current track:", currentTrack);

    return (
        <div className='flex justify-center'>
            <div className='flex flex-col justify-center gap-3 pt-6'>
                {currentTrack && (
                    <>
                        <div className='flex justify-start flex-col gap-2'>
                            <h1 className='text-4xl text-white font-bold'>{currentTrack.name}</h1>
                            <p className='text-[18px] font-semibold text-neutral-500'>{currentTrack.artist}</p>
                        </div>
                        <div className='p-3 mb-5'>
                            <img className='rounded shadow' src={`https://cms.samespace.com/assets/${currentTrack.cover}`} alt="" width={400} height={400} />
                        </div>
                        <div className="flex items-center w-full justify-between">
                            <span className="text-white mr-3 ml-5">{formatTime(currentTime)}</span>
                            <input
                                type="range"
                                min="0"
                                max={duration}
                                step="0.1"
                                value={currentTime}
                                onChange={handleSliderChange}
                                className="flex-grow"
                            />
                            <span className="text-white ml-2 mr-4">{formatTime(duration)}</span>
                        </div>
                        <div className=''>
                            <div className='flex justify-between p-4 items-center'>
                                <PiDotsThreeOutlineVertical size={28} className='text-white cursor-pointer' />
                                <div className='flex flex-row justify-center gap-4 ml-4'>
                                    <button  className="p-5 rounded-full border-2 border-green-400 hover:border-white bg-white hover:bg-green-400 text-black">
                                        <FaStepBackward />
                                    </button>
                                    <button
                                        onClick={handlePlayPause}
                                        className={`p-5 rounded-full border-2 border-green-400 hover:border-white bg-white hover:bg-green-400 text-black ${isPlaying ? 'bg-gray-700' : 'bg-green-500'}`}
                                    >
                                        {isPlaying ? <FaPause /> : <FaPlay />}
                                    </button>
                                    <button  className="p-5 rounded-full border-2 border-green-400 hover:border-white bg-white hover:bg-green-400 text-black">
                                        <FaStepForward />
                                    </button>
                                </div>
                                <input
                                    type="range"
                                    min="0"
                                    max="1"
                                    step="0.01"
                                    value={volume}
                                    onChange={handleVolumeChange}
                                    aria-label="Volume control"
                                    className='w-12 bg-green-400'
                                />
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
};

export default MusicCard;