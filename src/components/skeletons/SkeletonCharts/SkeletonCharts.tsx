import { SkeletonChartsContainerStyled } from "./SkeletonCharts.styles.ts";
import Shimmer from "../Shimmer/Shimmer";
import SkeletonElement from "../SkeletonElement/SkeletonElement.tsx";
import { FC, memo } from "react";

const SkeletonCharts: FC = () => {
  return (
    <SkeletonChartsContainerStyled data-testid="skeleton-charts">
      <Shimmer />
      <div>
        <SkeletonElement $type="title" />
        <SkeletonElement $type="text-chart" />
        <SkeletonElement $type="charts-body" />
      </div>
    </SkeletonChartsContainerStyled>
  );
};

export default memo(SkeletonCharts);
