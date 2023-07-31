import React, { useLayoutEffect, useEffect, useState } from "react";
import { ICONS } from "../../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { Howl, Howler } from "howler";
import { setIsPaused, setSoundPlayed } from "../../utils/songslice";
import { formatTime } from "../../utils/Controllers";
const Musicplayer = () => {
  const Heart = ICONS.FavoriteBorderOutlinedIcon;
  const Play = ICONS.PlayCircleFilledSharpIcon;
  const Skip = ICONS.SkipNextSharpIcon;
  const Prev = ICONS.SkipPreviousSharpIcon;
  const Pause = ICONS.PauseCircleFilledSharpIcon;
  const Shuffle = ICONS.ShuffleSharpIcon;
  const Volume = ICONS.VolumeUpOutlinedIcon;
  const Fullscreen = ICONS.FullscreenExitOutlinedIcon;
  const Undo = ICONS.ReplayOutlinedIcon;
  const List = ICONS.ListOutlinedIcon;
  const Desktop = ICONS.DesktopWindowsOutlinedIcon;
  const Mic = ICONS.MicNoneSharpIcon;
  const currentSong = useSelector((state) => state.song.currentSong);
  const isPaused = useSelector((state) => state.song.isPaused);
  const soundPlayed = useSelector((state) => state.song.soundPlayed);
  const [progressInterval, setProgressInterval] = useState(null);
  const dispatch = useDispatch();
  const [progress, setProgress] = useState(0);
  const [volumeLevel, setVolumeLevel] = useState(1);

  const playSound = () => {
    if (!soundPlayed) return;
    soundPlayed.play();
    dispatch(setIsPaused(false));
  };

  const pauseSound = () => {
    soundPlayed.pause();
    dispatch(setIsPaused(true));
  };

  const changeSong = (songSrc) => {
    if (soundPlayed) {
      soundPlayed.stop();
    }
    let sound = new Howl({
      src: [songSrc],
      html5: true,
    });
    dispatch(setSoundPlayed(sound));
    sound.play();
    dispatch(setIsPaused(false));
  };
  const updateProgress = () => {
    if (soundPlayed?.duration() !== null) {
      setProgress(soundPlayed.seek() || 0);
    }
  };

  useLayoutEffect(() => {
    if (!currentSong) {
      return;
    }
    changeSong(currentSong.track);
  }, [currentSong && currentSong.track]);

  const togglePlayPause = () => {
    if (isPaused) {
      playSound();
    } else {
      pauseSound();
    }
  };
  useEffect(() => {
    if (soundPlayed) {
      soundPlayed.on("play", () => {
        const interval = setInterval(updateProgress, 100);
        setProgressInterval(interval);
      });
    }
    return () => {
      if (soundPlayed) {
        soundPlayed.off("play");
      }
      clearInterval(progressInterval);
    };
  }, [soundPlayed, progressInterval]);

  const handleVolumeChange = (event) => {
    const newVolume = parseFloat(event.target.value);
    setVolumeLevel(newVolume);
    if (soundPlayed) {
      soundPlayed.volume(newVolume);
    }
  };
  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-[#313030] px-2 md:px-10 py-2 md:py-3 flex items-center justify-between text-white">
      {currentSong && soundPlayed && (
        <>
          <div className="flex items-center gap-2">
            <div className="w-16 h-16">
              <img
                className="w-full h-full rounded-md"
                src={currentSong.thumbnail}
                alt="Song Cover"
              />
            </div>
            <div className="flex flex-col">
              <p className="text-sm font-medium truncate">
                {" "}
                {currentSong.songname}
              </p>
              <p className="text-xs text-gray-400">
                {currentSong.artist.firstname +
                  " " +
                  currentSong.artist.lastname}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Heart className="h-6 w-6" />
            <Fullscreen className="h-6 w-6" />
          </div>
          <div className="flex flex-col items-center gap-4 ">
            <div className="flex items-center gap-2">
              <Shuffle className="h-10 w-10" />
              <Prev className="h-10 w-10" />
              {isPaused ? (
                <Play
                  className="h-14 w-14 text-white cursor-pointer hover:text-gray-300"
                  onClick={togglePlayPause}
                />
              ) : (
                <Pause
                  className="h-14 w-14 text-white cursor-pointer hover:text-gray-300"
                  onClick={togglePlayPause}
                />
              )}
              <Skip className="h-10 w-10" />
              <Undo className="h-10 w-10" />
            </div>
            <div className="flex mx-40 items-center gap-4">
              <span className="text-sm">{formatTime(progress)}</span>
              <div className="w-[500px] h-3 bg-gray-500 rounded-full">
                <div
                  className="w-1/4 h-full rounded-full bg-white"
                  style={{
                    width: `${(progress / soundPlayed.duration()) * 100}%`,
                  }}
                ></div>
              </div>
              <span className="text-sm">
                {formatTime(soundPlayed.duration())}
              </span>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <List className="h-6 w-6" />
            <Desktop className="h-6 w-6" />
            <Mic className="h-6 w-6" />
            <div className="flex items-center gap-2">
              <Volume className="h-6 w-6" />
              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={volumeLevel}
                onChange={handleVolumeChange}
              />
            </div>
          </div>
        </>
      )}
    </footer>
  );
};

export default Musicplayer;
