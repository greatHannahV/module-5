import React, { memo } from "react";
import Skeleton from "./SkeletonElement.styles";
import { SkeletonElementProps } from "./SkeletonElement.types";

const SkeletonElement: React.FC<SkeletonElementProps> = ({ $type }) => {
  return <Skeleton $type={$type}></Skeleton>;
};

export default memo(SkeletonElement);
