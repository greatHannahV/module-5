import StyledButton from "./Button.styles.ts";
import { ButtonProps } from "./Button.types.ts";

const Button: React.FC<ButtonProps> = ({ refetch, isFetching }) => {
  return (
    <StyledButton onClick={refetch} disabled={isFetching}>
      {isFetching ? "Updating..." : "Update Prices"}
    </StyledButton>
  );
};

export default Button;
