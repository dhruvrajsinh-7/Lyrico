// import { REACT_APP_UPLOAD_PRESET, REACT_APP_CLOUDNAME } from "../data/config";
import { openUploadWidget } from "../../utils/Cloudinarysetup";
const CloudinaryUpload = ({ setUrl, setName }) => {
  const clouname = import.meta.env.VITE_CLOUDNAME;
  const preset = import.meta.env.VITE_UPLOAD_PRESET;
  const uploadImageWidget = () => {
    let myUploadWidget = openUploadWidget(
      {
        cloudName: clouname,
        uploadPreset: preset,
        sources: ["local", "url", "dropbox", "instagram"],
      },
      function (error, result) {
        if (!error && result.event === "success") {
          setUrl(result.info.secure_url);
          setName(result.info.original_filename);
        } else {
          if (error) {
            console.log(error);
          }
        }
      }
    );
    myUploadWidget.open();
  };

  return (
    <button
      className="bg-white text-black  rounded-full p-4 font-semibold"
      onClick={uploadImageWidget}
    >
      Select Track
    </button>
  );
};

export default CloudinaryUpload;
