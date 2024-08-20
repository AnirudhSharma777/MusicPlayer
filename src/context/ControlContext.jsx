import React, { createContext, useState, useRef, useCallback } from 'react';

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
    const [playlist, setPlaylist] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(-1);

    const playSong = useCallback((song) => {
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
        setCurrentIndex(playlist.findIndex(track => track.id === song.id));

        audio.addEventListener('timeupdate', () => {
            setProgress(audio.currentTime);
        });

        audio.addEventListener('ended', () => {
            setProgress(0);
            setCurrentTrack(null);
            setCurrentAudio(null);
            handleNextSong(); // Automatically play the next song when the current song ends
        });
    }, [volume, playlist]);

    const handleSeek = (e) => {
        const newTime = e.target.value;
        if (currentAudio) {
            currentAudio.currentTime = newTime;
            setProgress(newTime);
        }
    };

    const adjustVolume = (vol) => {
        setVolume(vol);
        if (audioRef.current) {
            audioRef.current.volume = vol;
        }
    };

    const handlePlayPause = () => {
        const audio = audioRef.current;
        if (isPlaying) {
            audio.play();
        } else {
            audio.pause();
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

    const handlePreviousSong = () => {
        if (currentIndex > 0) {
            const previousSong = playlist[currentIndex - 1];
            playSong(previousSong);
        }
    };

    const handleNextSong = () => {
        if (currentIndex < playlist.length - 1) {
            const nextSong = playlist[currentIndex + 1];
            playSong(nextSong);
        }
    };

    const setPlaylistAndPlay = (newPlaylist, startIndex = 0) => {
        setPlaylist(newPlaylist);
        setCurrentIndex(startIndex);
        if (newPlaylist.length > 0) {
            playSong(newPlaylist[startIndex]);
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
            currentSongId,
            handlePreviousSong,
            handleNextSong,
            setPlaylistAndPlay
        }}>
            {children}
        </MusicPlayerContext.Provider>
    );
};
