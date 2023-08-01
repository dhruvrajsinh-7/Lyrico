import React from "react";
import { HTTPsecurePOSTRequest } from "../../services/API";

const CreatePlaylist = ({ closeModal }) => {
  const [playlistName, setPlaylistName] = useState("");
  const [playlistThumbnail, setPlaylistThumbnail] = useState("");

  const createPlaylist = async () => {
    const response = await HTTPsecurePOSTRequest("/playlist/create", {
      songname: playlistName,
      thumbnail: playlistThumbnail,
      songs: [],
    });
    if (response._id) {
      closeModal();
    }
  };

  return (
    <div
      className="absolute bg-black w-screen h-screen bg-opacity-50 flex justify-center items-center"
      onClick={closeModal}
    >
      <div
        className="bg-app-black w-1/3 rounded-md p-8"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className="text-white mb-5 font-semibold text-lg">
          Create Playlist
        </div>
        <div className="space-y-4 flex flex-col justify-center items-center">
          <input
            type="text"
            name="name"
            value={playlistName}
            onChange={(e) => setPlaylistName(e.target.value)}
            className=" bg-transparent  border-b-2 border-[#C56EFB] text-white rounded-full px-4  py-2 mb-4"
            placeholder="Playlist Name"
          />
          <input
            type="text"
            name="thumbnail"
            placeholder="Thumbnail"
            value={playlistThumbnail}
            onChange={(e) => setPlaylistThumbnail(e.target.value)}
            className="bg-transparent  border-b-2 border-[#C56EFB] text-white rounded-full px-4  py-2 mb-4"
          />
          <div
            className="bg-white w-1/3 rounded flex font-semibold justify-center items-center py-3 mt-4 cursor-pointer"
            onClick={createPlaylist}
          >
            Create
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePlaylist;
