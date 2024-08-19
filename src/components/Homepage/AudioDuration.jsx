import React, { useState, useEffect } from 'react';

const AudioDuration = ({ url }) => {
  const [duration, setDuration] = useState(null);

  useEffect(() => {
    const audio = new Audio(url);

    const handleLoadedMetadata = () => {
        const totalSeconds = audio.duration;
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = Math.floor(totalSeconds % 60);
        const formattedDuration = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
        setDuration(formattedDuration);
    };

    audio.addEventListener('loadedmetadata', handleLoadedMetadata);

    // Clean up the event listener
    return () => {
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
    };
  }, [url]);

  return (
    <div className='p-3'>
      {duration ? (
        <p>{duration}</p>
      ) : (
        <p>...</p>
      )}
    </div>
  );
};

export default AudioDuration;
