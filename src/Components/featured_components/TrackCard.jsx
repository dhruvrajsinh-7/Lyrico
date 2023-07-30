const TrackCard = ({ name, artist, previewUrl }) => {
  return (
    <div className="flex flex-col w-60 bg-gray-800 p-4 rounded-md">
      <div className="text-white text-xl font-semibold mb-2">{name}</div>
      <div className="text-gray-300 text-sm mb-2">{artist}</div>
      <audio controls>
        <source src={previewUrl} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default TrackCard;
