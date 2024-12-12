import {
  ShimmerWrapperStyled,
  SkeletonTableContainerStyled,
} from "./SkeletonTable.styles.ts";
import Shimmer from "../Shimmer/Shimmer";
import { FC, memo } from "react";
import SkeletonElement from "../SkeletonElement/SkeletonElement";

const SkeletonTable: FC = () => {
  return (
    <SkeletonTableContainerStyled>
      <div>
        <SkeletonElement $type="text" />
        <SkeletonElement $type="text" />
        <SkeletonElement $type="text" />
      </div>
      <ShimmerWrapperStyled>
        <Shimmer />
      </ShimmerWrapperStyled>
    </SkeletonTableContainerStyled>
  );
};

export default memo(SkeletonTable);
