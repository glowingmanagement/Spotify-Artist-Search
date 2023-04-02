import HistoryItem from "../HistoryItem";
import "./DisplayHistory.css";

type DisplayHistoryProps = {
  history: string[];
};

const DisplayHistory = ({ history }: DisplayHistoryProps) => {
  console.log(history);
  return (
    <div className="displayHistory">
      {history.map((item: any) => (
        <HistoryItem key={item.name} item={item} />
      ))}
    </div>
  );
};

export default DisplayHistory;
