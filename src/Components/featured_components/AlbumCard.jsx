import React from "react";

const AlbumCard = ({ title, description, imgUrl }) => {
  return (
    <div className="relative flex flex-col bg-black bg-opacity-40 w-1/5 p-2 rounded-lg overflow-hidden">
      <div className="h-40 overflow-hidden">
        <img
          className="w-full h-full object-cover filter absolute top-0 left-0"
          src={imgUrl}
          alt="label"
        />
      </div>
      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-white font-semibold">
        <h3 className="text-white text-lg px-2 text-center">{title}</h3>
        <p className="text-gray-500 text-sm px-2 text-center">{description}</p>
      </div>
    </div>
  );
};

export default AlbumCard;
