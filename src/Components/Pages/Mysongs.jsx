import React, { useEffect, useState } from "react";
import { HTTPsecureGETRequest } from "../../services/API";
import SongCard from "../featured_components/songCard";

const Mysongs = () => {
  const [songs, setSongs] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchSongs = async () => {
    try {
      const response = await HTTPsecureGETRequest("/song/get/mysongs");
      setSongs(response); // No need to extract data again, as it's already done in the API function
      setLoading(false);
      console.log("Songs:", response);
    } catch (error) {
      console.error("Error fetching songs:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSongs();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (songs.length === 0) {
    return <div>No songs found.</div>;
  }

  return (
    <div>
      <h1 className="text-4xl text-white font-bold">My Songs</h1>
      <div>
        {songs.map((song) => (
          <SongCard key={song._id} data={song} />
        ))}
      </div>
    </div>
  );
};

export default Mysongs;
