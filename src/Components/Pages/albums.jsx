import React from "react";
import albums from "../data/albums";
import Category from "../featured_components/category";
const Albums = () => {
  return (
    <div>
      <section>
        <h1 className="text-white font-bold text-[40px] mb-10 mx-2">Albums</h1>
        <div className="p-4 grid grid-cols-5 gap-5 text-white">
          {albums.map((category, index) => (
            <Category key={index} category={category} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Albums;
