import React, { useState, useEffect } from "react";
import Shimmer from "../Shimmer";
import Card from "./Card";
import AlbumsCard from "./AlbumCard";
const cardsData = [
  {
    title: "Card title",
    description:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
    imgUrl: "https://picsum.photos/200/300",
  },
  {
    title: "Card title",
    description:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
    imgUrl: "https://picsum.photos/200/300",
  },
  {
    title: "Card title",
    description:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
    imgUrl: "https://picsum.photos/200/300",
  },
  {
    title: "Card title",
    description:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
    imgUrl: "https://picsum.photos/200/300",
  },
];
const Feed = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoaded) {
    return (
      <>
        <Shimmer />
      </>
    );
  }
  return (
    <div className="flex flex-col overflow-y-auto">
      <div className="text-white ">
        <div className="text-2xl font-semibold mb-5">Section title</div>
        <div className="w-full flex gap-6">
          {cardsData.map((item) => {
            return (
              <Card
                title={item.title}
                description={item.description}
                imgUrl={item.imgUrl}
              />
            );
          })}
        </div>
        <div className="text-2xl font-semibold mb-5">Section title</div>
        <div className="w-full flex gap-3">
          {cardsData.map((item) => {
            return (
              <AlbumsCard
                title={item.title}
                description={item.description}
                imgUrl={item.imgUrl}
              />
            );
          })}
        </div>
        <div className="text-2xl font-semibold mb-5">Section title</div>
        <div className="w-full flex gap-3">
          {cardsData.map((item) => {
            return (
              <AlbumsCard
                title={item.title}
                description={item.description}
                imgUrl={item.imgUrl}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Feed;
