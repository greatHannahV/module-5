import SkeletonElement from "../SkeletonElement/SkeletonElement.tsx";
import { SkeletonContainerStyled } from "./SkeletonBiggestContent.styles.ts";
import { FC, memo } from "react";

const SkeletonBiggestContent: FC = () => {
  return (
    <SkeletonContainerStyled>
      <SkeletonElement $type="header" />
      <SkeletonElement $type="text" />
      <SkeletonElement $type="text" />
      <SkeletonElement $type="text" />
      <SkeletonElement $type="text" />
      <SkeletonElement $type="text" />
      <SkeletonElement $type="text" />
      <SkeletonElement $type="text" />
      <SkeletonElement $type="text" />
      <SkeletonElement $type="text" />
      <SkeletonElement $type="text" />
    </SkeletonContainerStyled>
  );
};

export default memo(SkeletonBiggestContent);
