import React, { createContext, useState, useRef } from 'react';

export const MusicPlayerContext = createContext();

export const MusicPlayerProvider = ({ children }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTrack, setCurrentTrack] = useState(null);
    const [volume, setVolume] = useState(0.5); // Initial volume (50%)
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const audioRef = useRef(null);
    const [currentSongId, setCurrentSongId] = useState(null);
    const [progress, setProgress] = useState(0);
    const [currentAudio, setCurrentAudio] = useState(null);

    const playSong = (song) => {
        if (audioRef.current) {
            audioRef.current.pause();
            audioRef.current.currentTime = 0;
        }

        const audio = new Audio(song.url);
        audioRef.current = audio;
        audio.volume = volume;
        audio.play();

        setCurrentTrack({ ...song, duration: audio.duration, id: song.id });
        setCurrentAudio(audio);

        audio.addEventListener('timeupdate', () => {
            setProgress(audio.currentTime);
        });

        audio.addEventListener('ended', () => {
            setProgress(0);
            setCurrentTrack(null);
            setCurrentAudio(null);
        });
    };

    const handleSeek = (e) => {
        const newTime = e.target.value;
        if (currentAudio) {
            currentAudio.currentTime = newTime;
            setProgress(newTime);
        }
    };



    {/* const playTrack = (track) => {
    //     setCurrentTrack(track);
    //     setIsPlaying(true);
    // };

    // const pauseTrack = () => {
    //     setIsPlaying(false);
    // };

    // const nextTrack = (nextTrack) => {
    //     setCurrentTrack(nextTrack);
    //     setIsPlaying(true);
    // };

    // const previousTrack = (prevTrack) => {
    //     setCurrentTrack(prevTrack);
    //     setIsPlaying(true);
    // };
    */}

    const adjustVolume = (vol) => {
        setVolume(vol);
        if (audioRef.current) {
            audioRef.current.volume = vol;
        }
    };

    const handlePlayPause = () => {
        const audio = audioRef.current;
        if (isPlaying) {
            audio.pause();
        } else {
            audio.play();
        }
        setIsPlaying(!isPlaying);
    };

    const handleVolumeChange = (e) => {
        const newVolume = parseFloat(e.target.value);
        setVolume(newVolume);
        if (audioRef.current) {
            audioRef.current.volume = newVolume;
        }
    };

    const handleTimeUpdate = () => {
        if (audioRef.current) {
            setCurrentTime(audioRef.current.currentTime);
        }
    };

    const handleSliderChange = (e) => {
        const newTime = parseFloat(e.target.value);
        if (audioRef.current) {
            audioRef.current.currentTime = newTime;
            setCurrentTime(newTime);
        }
    };

    const handleLoadedMetadata = () => {
        if (audioRef.current) {
            setDuration(audioRef.current.duration);
        }
    };

    return (
        <MusicPlayerContext.Provider value={{
            isPlaying,
            currentTrack,
           
            volume,
            adjustVolume,
            handleVolumeChange,
            audioRef,
            setIsPlaying,
            setCurrentTrack,
            handlePlayPause,
            currentTime,
            duration,
            handleSliderChange,
            handleTimeUpdate,
            handleLoadedMetadata,
            playSong,
            handleSeek,
            progress,
            currentSongId
        }}>
            {children}
        </MusicPlayerContext.Provider>
    );
};
