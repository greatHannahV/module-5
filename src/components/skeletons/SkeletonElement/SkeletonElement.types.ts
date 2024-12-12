import { SKELETON_TYPE_MAP } from "./SkeletonElement.styles";

export type SkeletonType = keyof typeof SKELETON_TYPE_MAP;

export interface SkeletonElementProps {
  $type: SkeletonType;
}
