import "./SpotifyTag.css";

type SpotifyTag = {
  name: string;
  value: string;
};

const SpotifyTag = ({ name, value }: SpotifyTag) => {
  return (
    <div className="tagContainer">
      <h2 className="tagText">
        {name}: {value}
      </h2>
    </div>
  );
};

export default SpotifyTag;
