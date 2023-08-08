import CloudinaryUpload from "../Helper/CloudinaryUpload";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { HTTPsecurePOSTRequest } from "../../services/API";
import { toast } from "react-toastify";
const AddSong = () => {
  const [songname, setSongName] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [playlistUrl, setPlaylistUrl] = useState("");
  const [uploadedSongFileName, setUploadedSongFileName] = useState();
  const navigate = useNavigate();

  const submitSong = async () => {
    const data = { songname, thumbnail, track: playlistUrl };
    const response = await HTTPsecurePOSTRequest("/song/create", data);
    if (response.err) {
      alert("Could not create song");
      return;
    }
    toast.success("Song added Successfully");
    navigate("/");
  };
  return (
    <>
      <div className="text-2xl font-semibold mb-5 text-white mt-8">
        Upload Your Music
      </div>
      <div className="w-2/3 flex space-x-3">
        <div className="w-1/2">
          <h1 className="text-[#C56EFB] font-semibold">name</h1>
          <input
            type="text"
            name="songname"
            className=" bg-transparent text-white border-b-2 border-[#C56EFB]  rounded-full px-4  py-2 mb-3"
            placeholder="Enter Songname"
            value={songname}
            onChange={(e) => setSongName(e.target.value)}
          />
          <h1 className="text-[#C56EFB] font-semibold">Thumbnail</h1>
          <input
            type="text"
            name="thumbnail"
            className=" bg-transparent text-white border-b-2 border-[#C56EFB]   rounded-full px-4 py-2 mb-3"
            placeholder="Enter Thumbnail URL"
            value={thumbnail}
            onChange={(e) => setThumbnail(e.target.value)}
          />
        </div>
      </div>
      <div className="py-5">
        {uploadedSongFileName ? (
          <div className="bg-white rounded-full p-3 w-1/3">
            {uploadedSongFileName.substring(0, 35)}...
          </div>
        ) : (
          <CloudinaryUpload
            setUrl={setPlaylistUrl}
            setName={setUploadedSongFileName}
            type={"audio"}
          />
        )}
      </div>
      <div
        className="bg-white w-40 flex items-center justify-center p-4 rounded-full cursor-pointer font-semibold"
        onClick={submitSong}
      >
        Submit Song
      </div>
    </>
  );
};

export default AddSong;
