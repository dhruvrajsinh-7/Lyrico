import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentSong } from "../../utils/songslice";

const SongCard = ({ data }) => {
  const dispatch = useDispatch();
  const currentSong = useSelector((state) => state.song.currentSong);

  const handleSongClick = () => {
    dispatch(setCurrentSong(data));
  };

  return (
    <div
      className="flex bg-transparent p-2 rounded-md"
      onClick={handleSongClick}
    >
      <div
        className="w-12 h-12 bg-cover bg-center"
        style={{
          backgroundImage: `url("${data.thumbnail}")`,
        }}
      ></div>
      <div className="flex w-full">
        <div className="text-white flex justify-center  flex-col pl-4 w-5/6">
          <div className="cursor-pointer hover:underline">{data.songname}</div>
          <div className="text-xs text-gray-400 cursor-pointer hover:underline">
            {data.artist.firstname + " " + data.artist.lastname}
          </div>
        </div>
        <div className="w-1/6 flex items-center justify-center text-gray-400 text-sm">
          <div>3:44</div>
        </div>
      </div>
    </div>
  );
};

export default SongCard;
