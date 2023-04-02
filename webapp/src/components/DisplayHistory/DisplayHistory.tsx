import HistoryItem from "../HistoryItem";

import "./DisplayHistory.css";

type DisplayHistoryProps = {
  history: string[];
};

const DisplayHistory = ({ history }: DisplayHistoryProps) => {
  return (
    <div className="displayHistory">
      {history.map((item: any) => (
        <HistoryItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default DisplayHistory;
