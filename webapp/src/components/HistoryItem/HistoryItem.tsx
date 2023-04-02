import { Link } from "react-router-dom";

import "./HistoryItem.css";

type HistoryItemProps = {
  item: {
    name: string;
    image: string;
    id: string;
  };
};

const HistoryItem = ({ item }: HistoryItemProps) => {
  return (
    <Link to={`/search/${item.id}`} className="link">
      <div className="historyItemContainer">
        <img src={item.image} alt={item.name} className="historyImage" />
        <h2 className="historyItemTitle">{item.name}</h2>
      </div>
    </Link>
  );
};

export default HistoryItem;
