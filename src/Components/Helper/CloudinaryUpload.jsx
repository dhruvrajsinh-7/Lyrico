import { openUploadWidget } from "../../utils/Cloudinarysetup";
const CloudinaryUpload = ({ setUrl, setName, type }) => {
  const cloudname = import.meta.env.VITE_CLOUDNAME;
  const preset = import.meta.env.VITE_UPLOAD_PRESET;
  const uploadImageWidget = () => {
    let myUploadWidget = openUploadWidget(
      {
        cloudName: cloudname,
        uploadPreset: preset,
        sources: ["local", "url", "dropbox", "instagram"],
      },
      function (error, result) {
        if (!error && result.event === "success") {
          setUrl(result.info.secure_url);
          setName(result.info.original_filename);
        } else {
          if (error) {
            console.log("error");
            console.log(error);
          }
        }
      }
    );
    myUploadWidget.open();
  };

  if (type === "audio") {
    return (
      <button
        className="bg-white text-black rounded-full p-4 font-semibold"
        onClick={uploadImageWidget}
      >
        Select Track
      </button>
    );
  }
  return (
    <button
      className="bg-white text-black rounded-full p-4 font-semibold"
      onClick={uploadImageWidget}
    >
      Select Thumbnail
    </button>
  );
};

export default CloudinaryUpload;
