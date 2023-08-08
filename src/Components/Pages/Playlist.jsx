import React, { useState, useEffect } from "react";
import CreatePlaylist from "../modals/CreatePlaylist";
import AddToPlaylist from "../modals/AddtoPlaylist";
import {
  HTTPsecureGETRequest,
  HTTPsecurePOSTRequest,
} from "../../services/API";

const Playlist = () => {
  const [createPlaylistModalOpen, setCreatePlaylistModalOpen] = useState(false);
  const [addToPlaylistModalOpen, setAddToPlaylistModalOpen] = useState(false);
  const [playlists, setPlaylists] = useState([]);
  const [currentPlaylist, setCurrentPlaylist] = useState(null);
  const [currentSong, setCurrentSong] = useState(null);

  const fetchPlaylists = async () => {
    try {
      const response = await HTTPsecureGETRequest("/playlist/get/myplaylists");
      if (response) {
        setPlaylists(response);
      }
    } catch (error) {
      console.error("Error fetching playlists:", error);
    }
  };

  useEffect(() => {
    fetchPlaylists();
  }, []);

  const addSongToPlaylist = async (playlistId, songId) => {
    const payload = { playlistId, songId };
    try {
      const response = await HTTPsecurePOSTRequest(
        "/playlist/add/song",
        payload
      );
      if (response._id) {
        setAddToPlaylistModalOpen(false);
        fetchPlaylists();
      }
    } catch (error) {
      console.error("Error adding song to playlist:", error);
    }
  };

  return (
    <div className="h-full w-full ">
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
          playlist={currentPlaylist}
        />
      )}
      <div className="flex justify-between">
        <div className="flex flex-col ">
          <h1 className="text-white text-4xl font-bold">Playlist</h1>
          <div className="flex gap-8 mx-8 my-8 z-30">
            {playlists.length > 0 ? (
              playlists.map((playlist) => (
                <div
                  className="flex flex-col gap-2 bg-black opacity-80 rounded-md p-4"
                  key={playlist._id}
                >
                  <div className="flex flex-col">
                    <span className="font-4xl text-white">
                      {playlist.songname}
                    </span>
                    <span className="font-4xl text-white">
                      {" "}
                      {playlist.songs.length} songs
                    </span>
                    <span className="font-4xl text-white">
                      <img src={playlist.thumbnail} alt="page cover" />
                    </span>
                  </div>
                  <button
                    className="bg-white  text-black px-4 py-2 font-semibold rounded"
                    onClick={() => {
                      setCurrentPlaylist(playlist);
                      setAddToPlaylistModalOpen(true);
                    }}
                  >
                    Add Song
                  </button>
                </div>
              ))
            ) : (
              <div className="flex justify-center">
                <h1>No playlists available.</h1>
              </div>
            )}
          </div>
        </div>
        <div className="">
          <button
            className="rounded-full  bg-[#C56EFB] px-4 py-2 font-semibold z-20"
            onClick={() => setCreatePlaylistModalOpen(true)}
          >
            Create Playlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default Playlist;
