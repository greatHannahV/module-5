import { useNavigate } from "react-router-dom";
import { ErrorButtonStyles, ErrorStyles } from "./Error.styles";
import { ErrorProps } from "./Error.types";

const Error: React.FC<ErrorProps> = ({ error }) => {
  const navigate = useNavigate();
  function handleBack() {
    if (window.history.length <= 1) {
      navigate("/HomePage");
    } else {
      navigate(-1);
    }
  }
  return (
    <ErrorStyles id="error-container">
      <p>
        {error
          ? `There is the error:${error}`
          : "Something went wrong.Try later"}
      </p>
      <ErrorButtonStyles onClick={handleBack}>Back</ErrorButtonStyles>
    </ErrorStyles>
  );
};

export default Error;
