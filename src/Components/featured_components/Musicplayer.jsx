import React from "react";
import { ICONS } from "../../utils/constant";
const Musicplayer = () => {
  const Heart = ICONS.FavoriteBorderOutlinedIcon;
  const Play = ICONS.PlayCircleFilledSharpIcon;
  const Skip = ICONS.SkipNextSharpIcon;
  const Prev = ICONS.SkipPreviousSharpIcon;
  const Shuffle = ICONS.ShuffleSharpIcon;
  const Volume = ICONS.VolumeUpOutlinedIcon;
  const Fullscreen = ICONS.FullscreenExitOutlinedIcon;
  const Undo = ICONS.ReplayOutlinedIcon;
  const List = ICONS.ListOutlinedIcon;
  const Desktop = ICONS.DesktopWindowsOutlinedIcon;
  const Mic = ICONS.MicNoneSharpIcon;
  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-[#313030] px-2 md:px-10 py-2 md:py-3 flex items-center justify-between text-white">
      <div className="flex items-center gap-2">
        <div className="w-16 h-16">
          <img
            className="w-full h-full rounded-md"
            src="https://d2y6mqrpjbqoe6.cloudfront.net/image/upload/f_auto,q_auto/media/library-400/216_636967437355378335Your_Lie_Small_hq.jpg"
            alt="Song Cover"
          />
        </div>
        <div className="flex flex-col">
          <p className="text-sm font-medium truncate">AfterHours</p>
          <p className="text-xs text-gray-400">Weekend</p>
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
          <Play className="h-14 w-14 text-white cursor-pointer hover:text-gray-300" />
          <Skip className="h-10 w-10" />
          <Undo className="h-10 w-10" />
        </div>
        <div className="flex mx-40 items-center gap-4">
          <span className="text-sm">0:49</span>
          <div className="w-[500px] h-3 bg-gray-500 rounded-full">
            <div
              className="w-1/4 h-full rounded-full bg-white"
              style={{ width: "30%" }}
            ></div>
          </div>
          <span className="text-sm">3:15</span>
        </div>
      </div>
      <div className="flex items-center gap-6">
        <List className="h-6 w-6" />
        <Desktop className="h-6 w-6" />
        <Mic className="h-6 w-6" />
        <div className="flex items-center gap-2">
          <Volume className="h-6 w-6" />
          <div className="w-20 h-2 bg-gray-400 rounded-full">
            <div
              className="w-1/3 h-full rounded-full bg-white"
              style={{ width: "60%" }}
            ></div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Musicplayer;
