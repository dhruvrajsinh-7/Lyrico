import { useSelector } from "react-redux";
import { useState } from "react";
export const formatTime = (time, soundPlayed) => {
  if (soundPlayed && soundPlayed.duration() !== null) {
    const duration = soundPlayed.duration();
    return new Date(duration * 1000).toISOString().slice(11, 19);
  }
  return new Date(time * 1000).toISOString().slice(11, 19);
};
export const useVolume = (initialVolume = 1) => {
  const [volumeLevel, setVolumeLevel] = useState(initialVolume);

  const handleVolumeChange = (event) => {
    const newVolume = parseFloat(event.target.value);
    setVolumeLevel(newVolume);
  };

  return [volumeLevel, handleVolumeChange];
};
