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
  return (
    <div className="bg-[#313030] pt-4 flex items-center h-full text-white">
      <div className="flex items-center mx-2 gap-2">
        <div className="w-16 h-16">
          <img
            className="w-full h-full rounded-md"
            src="https://d2y6mqrpjbqoe6.cloudfront.net/image/upload/f_auto,q_auto/media/library-400/216_636967437355378335Your_Lie_Small_hq.jpg"
            alt="Song Cover"
          />
        </div>
        <div className="flex flex-col mx-4">
          <p className="text-sm font-medium truncate">AfterHours</p>
          <p className="text-xs text-gray-400">Weekend</p>
        </div>
      </div>
      <div className="flex items-center gap-2 mx-4">
        <Heart className="h-6 w-6" />
        <Fullscreen className="h-6 w-6" />
      </div>
      <div className="flex flex-col items-center gap-4 mx-4">
        <div className="flex items-center gap-4">
          <Shuffle className="h-8 w-8" />
          <Prev className="h-8 w-8" />
          <Play className="h-14 w-14 text-white cursor-pointer hover:text-gray-300" />
          <Skip className="h-9 w-9" />
          <Undo className="h-8 w-8" />
        </div>
        <div className="flex mx-40 items-center gap-4">
          <span className="text-sm">0:49</span>
          <div className="w-[500px] h-3 bg-gray-400 rounded-full">
            <div
              className="w-1/4 h-full rounded-full bg-green-500"
              style={{ width: "30%" }}
            ></div>
          </div>
          <span className="text-sm">3:15</span>
        </div>
      </div>
      <div className="flex items-center gap-6">
        <List className="h-6 w-6" />
        <Desktop className="h-6 w-6" />
        <div className="flex items-center gap-2">
          <Volume className="h-6 w-6" />
          <div className="w-14 h-2 bg-gray-400 rounded-full">
            <div
              className="w-1/2 h-full rounded-full bg-green-500"
              style={{ width: "60%" }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Musicplayer;
