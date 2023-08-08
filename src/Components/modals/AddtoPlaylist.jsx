import React, { useState, useEffect } from "react";
import { HTTPsecureGETRequest } from "../../services/API";

const AddToPlaylist = ({ closeModal, addSongToPlaylist, playlist }) => {
  const [songs, setSongs] = useState([]);
  const [selectedSong, setSelectedSong] = useState("");

  const fetchSongs = async () => {
    const response = await HTTPsecureGETRequest("/song/get/allsongs");
    if (response) {
      setSongs(response);
    }
  };

  useEffect(() => {
    fetchSongs();
  }, []);

  return (
    <div>
      <div className="bg-black opacity-80  p-4 rounded-lg">
        <h2 className="text-2xl text-white font-semibold mb-4">
          Select a Song
        </h2>
        <div className="space-y-2">
          {songs.map((song) => (
            <div
              key={song._id}
              className="flex items-center justify-between px-4 py-2 rounded-md bg-gray-200 cursor-pointer hover:bg-gray-300"
              onClick={() => setSelectedSong(song._id)}
            >
              <div className="text-black font-semibold">{song.songname}</div>
              {selectedSong === song._id && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-green-600"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M15.293 6.293a1 1 0 011.414 0l2 2a1 1 0 01-1.414 1.414l-1.853-1.853-3.854 3.853a1 1 0 01-1.32.083l-6-4a1 1 0 111.237-1.562l4.53 3.02L15.293 6.293zM5 3a2 2 0 00-2 2v8a2 2 0 002 2h6a1 1 0 010 2H5a4 4 0 01-4-4V5a2 2 0 012-2h4a1 1 0 110 2H5z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="mt-4 flex justify-end">
        <button
          className="px-4 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold shadow-md mr-2 hover:from-purple-600 hover:to-pink-600"
          onClick={() => {
            if (selectedSong && playlist) {
              addSongToPlaylist(playlist._id, selectedSong);
            }
          }}
        >
          Add Song to Playlist
        </button>
        <button
          className="px-4 py-2 rounded-lg bg-gray-300 text-gray-700 font-semibold shadow-md hover:bg-gray-400"
          onClick={closeModal}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default AddToPlaylist;
