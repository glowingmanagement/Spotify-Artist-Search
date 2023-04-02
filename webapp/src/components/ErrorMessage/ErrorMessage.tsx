import "./ErrorMessage.css";

type ErrorMessageProps = {
  title: string;
  message: string;
};

const ErrorMessage = ({ title, message }: ErrorMessageProps) => {
  return (
    <div className="errorMessage">
      <h3>{title}</h3>
      <p>{message}</p>
    </div>
  );
};

export default ErrorMessage;
