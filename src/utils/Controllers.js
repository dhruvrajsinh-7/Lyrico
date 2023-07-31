import { useSelector } from "react-redux";
import { useState } from "react";
export const formatTime = (timeInSeconds) => {
  const soundPlayed = useSelector((state) => state.song.soundPlayed);
  if (!soundPlayed || soundPlayed.duration() === null) {
    return "00:00";
  }

  const minutes = Math.floor(timeInSeconds / 60);
  const seconds = Math.floor(timeInSeconds % 60);
  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
    2,
    "0"
  )}`;
};
export const useVolume = (initialVolume = 1) => {
  const [volumeLevel, setVolumeLevel] = useState(initialVolume);

  const handleVolumeChange = (event) => {
    const newVolume = parseFloat(event.target.value);
    setVolumeLevel(newVolume);
  };

  return [volumeLevel, handleVolumeChange];
};
