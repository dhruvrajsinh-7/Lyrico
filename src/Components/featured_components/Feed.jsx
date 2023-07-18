import { useState, useEffect } from "react";
import Shimmer from "../Shimmer";
const Feed = () => {
  const [isLoaded, setIsLoaded] = useState(false);

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
    <div className="flex flex-col mt-7 mx-10">
      <h1 className="font-semibold text-white text-[23px]">Section Title</h1>
    </div>
  );
};

export default Feed;
