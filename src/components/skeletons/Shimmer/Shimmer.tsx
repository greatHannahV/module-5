import { FC, memo } from "react";
import {
  ShimmerContainerStyled,
  ShimmerEffectStyled,
} from "./Shimmer.styles.ts";

const Shimmer: FC = () => {
  return (
    <ShimmerContainerStyled>
      <ShimmerEffectStyled />
    </ShimmerContainerStyled>
  );
};

export default memo(Shimmer);
