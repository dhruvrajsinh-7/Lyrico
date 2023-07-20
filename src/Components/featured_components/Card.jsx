import React from "react";
import { ICONS } from "../../utils/constant";

const Card = ({ title, description, imgUrl }) => {
  const Play = ICONS.PlayCircleFilledSharpIcon;

  return (
    <div className="relative w-1/5 h-1/3  rounded-lg overflow-hidden justify-center ">
      <div className="h-80 w-full overflow-hidden relative">
        <img
          className="w-full h-full object-cover filter absolute top-0 left-0"
          src={imgUrl}
          alt="label"
        />
      </div>
      <div className="absolute  top-[65%] z-10 left-[85%]">
        <Play className="text-violet-200  h-5 w-5 cursor-pointer" />
      </div>
      <div
        className="absolute bottom-0 left-0 w-full bg-opacity-40 flex flex-col justify-center p-2"
        style={{ backdropFilter: "blur(8px)" }}
      >
        <h3 className="text-white font-semibold text-lg px-2">{title}</h3>
        <p className="text-gray-400 text-sm px-2 font-semibold">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Card;
