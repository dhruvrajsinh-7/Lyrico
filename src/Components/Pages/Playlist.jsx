import React, { useState } from "react";
import CreatePlaylist from "../modals/CreatePlaylist";
import AddToPlaylist from "../modals/AddtoPlaylist";
import { HTTPsecurePOSTRequest } from "../../services/API";
const Playlist = () => {
  const [createPlaylistModalOpen, setCreatePlaylistModalOpen] = useState(false);
  const [addToPlaylistModalOpen, setAddToPlaylistModalOpen] = useState(false);
  const addSongToPlaylist = async (playlistId) => {
    // const songId = currentSong._id;
    // const payload = { playlistId, songId };
    // const response = await HTTPsecurePOSTRequest("/playlist/add/song", payload);
    // if (response._id) {
    //   setAddToPlaylistModalOpen(false);
    // }
  };
  return (
    <>
      <div className="h-full w-full bg-app-black">
        {createPlaylistModalOpen && (
          <CreatePlaylist
            closeModal={() => {
              setCreatePlaylistModalOpen(false);
            }}
          />
        )}
        {addToPlaylistModalOpen && (
          <AddToPlaylist
            closeModal={() => {
              setAddToPlaylistModalOpen(false);
            }}
            addSongToPlaylist={addSongToPlaylist}
          />
        )}
        <div className="flex flex-col  ">
          <h1 className="text-white text-4xl font-bold">Playlist</h1>
          <div className="flex flex-col justify-center items-center h-screen  text-white">
            <h1 className="text-2xl font-semibold">
              Create your first playlist
            </h1>
            <h2 className="my-3">it's easy. We'll help you.</h2>
            <button
              onClick={() => {
                setCreatePlaylistModalOpen(true);
              }}
              className="text-white  py-1 font-semibold px-4 rounded-full border-2 border-gradient"
              style={{
                background:
                  "linear-gradient(135deg, #8A16C0, #BC3E64, #181818)",
              }}
            >
              Create Playlist
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Playlist;
