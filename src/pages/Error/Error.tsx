import { useLocation, useNavigate } from "react-router-dom";
import { BackLink, ErrorContent, ErrorWrapper } from "./Error.styles.ts";

const Error: React.FC = () => {
  const location = useLocation();
  const error = location.state?.error;
  const navigate = useNavigate();

  const handleBackClick = () => {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate("/Home");
    }
  };
  return (
    <ErrorWrapper>
      <ErrorContent>
        <p>{error ? error.message : "Something went wrong."}</p>
        <BackLink to="#" onClick={handleBackClick}>
          Back
        </BackLink>
      </ErrorContent>
    </ErrorWrapper>
  );
};

export default Error;
