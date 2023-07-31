import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { Howl, Howler } from "howler";
import MusicPlayer from "../featured_components/Musicplayer";
import { useDispatch, useSelector } from "react-redux";
import { setIsPaused, setSoundPlayed } from "../utils/songslice";

const Home = ({ children }) => {
  const dispatch = useDispatch();
  const soundPlayed = useSelector((state) => state.song.soundPlayed);
  const isPaused = useSelector((state) => state.song.isPaused);

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

  const togglePlayPause = () => {
    if (isPaused) {
      playSound();
    } else {
      pauseSound();
    }
  };

  return (
    <div className="flex h-screen w-full">
      <Sidebar />
      <div className="w-4/5 h-full overflow-auto">
        <div className="w-full h-1/10 items-center justify-end">
          <Navbar />
        </div>
        <div className="p-8 pt-0 overflow-auto">{children}</div>
      </div>
      <MusicPlayer />
    </div>
  );
};

export default Home;
