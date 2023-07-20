import React from "react";
import { ICONS } from "../utils/constant";
import { Logo } from "../assets";
import { Link } from "react-router-dom";

function Sidebar() {
  const HomeIcon = ICONS.HomeIcon;
  const Search = ICONS.SearchSharpIcon;
  const Library = ICONS.MenuBookIcon;
  const Playlist = ICONS.PlaylistPlayIcon;
  const Artist = ICONS.HeadsetTwoToneIcon;
  const Songs = ICONS.MusicNoteOutlinedIcon;
  const MusicVideo = ICONS.OndemandVideoSharpIcon;
  const Setting = ICONS.SettingsSharpIcon;
  const Logout = ICONS.ExitToAppSharpIcon;

  return (
    <div className="h-full w-1/5 flex  text-[#9B9B9B]  text-sm">
      <div className="flex px-14 flex-col space-y-4 border-r">
        <button className="flex items-center space-x-2 mt-8 hover:text-white">
          <img className="h-full w-40" src={Logo} alt="Logo" />
        </button>
        <div className="w-40">
          <button className=" mt-8 mb-4 w-full text-xs border border-gray-300 focus:border-gray-500 transition-all duration-300 outline-none rounded-full flex items-center">
            <Search className="h-5 w-5 mx-2" />
            <input
              type="text"
              placeholder="Search"
              className="outline-none bg-transparent text-white flex-grow p-2"
            />
            z
          </button>
        </div>
        <h1 className="text-[#E8E8E8] ">Menu</h1>

        <button className="flex items-center space-x-2 hover:text-white ">
          <HomeIcon className="h-5 w-5" />
          <p>Home</p>
        </button>

        <button className="flex items-center space-x-2 hover:text-white">
          <Playlist className="h-5 w-5" />
          <p>Playlist</p>
        </button>

        <button className="flex items-center space-x-2 hover:text-white">
          <Artist className="h-5 w-5" />
          <p>Artist</p>
        </button>

        <h1 className="text-[#E8E8E8] mt-[200px]">Library</h1>
        <Link
          className="flex items-center space-x-2 hover:text-white"
          to="/albums"
        >
          <Library className="h-5 w-5" />
          <p>Albums</p>
        </Link>
        <button className="flex items-center space-x-2 hover:text-white">
          <Songs className="h-5 w-5" />
          <p>Songs</p>
        </button>
        <button className="flex items-center space-x-2 hover:text-white">
          <MusicVideo className="h-5 w-5" />
          <p>Music Video</p>
        </button>
        <h1 className="text-[#E8E8E8] my-20">Other</h1>
        <button className="flex items-center space-x-2 hover:text-white">
          <Setting className="h-5 w-5" />
          <p>Setting</p>
        </button>
        <button className="flex items-center space-x-2 hover:text-white">
          <Logout className="h-5 w-5" />
          <p>Log out</p>
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
