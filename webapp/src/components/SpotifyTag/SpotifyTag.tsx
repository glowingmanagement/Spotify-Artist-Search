import "./SpotifyTag.css";

type SpotifyTagTypes = {
  name: string;
  value: string;
};

const SpotifyTag = ({ name, value }: SpotifyTagTypes) => {
  return (
    <div className="tagContainer">
      <h2 className="tagText">
        {name}: {value}
      </h2>
    </div>
  );
};

export default SpotifyTag;
