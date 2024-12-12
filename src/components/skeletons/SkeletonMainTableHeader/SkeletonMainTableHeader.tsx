import {
  HeaderContentStyled,
  SkeletonHeaderContainerStyled,
} from "./SkeletonMainTableHeader.styles";
import Shimmer from "../Shimmer/Shimmer";
import { FC, memo } from "react";
import SkeletonElement from "../SkeletonElement/SkeletonElement";

const SkeletonMainTableHeader: FC = () => {
  return (
    <SkeletonHeaderContainerStyled>
      <Shimmer />
      <HeaderContentStyled>
        <SkeletonElement $type="header" />
      </HeaderContentStyled>
    </SkeletonHeaderContainerStyled>
  );
};

export default memo(SkeletonMainTableHeader);
