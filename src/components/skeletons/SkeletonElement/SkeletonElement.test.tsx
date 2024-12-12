import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import SkeletonElement from "./SkeletonElement";
import "@testing-library/jest-dom";

describe("SkeletonElement", () => {
  it("renders with correct styles based on type", () => {
    const { container } = render(<SkeletonElement $type="charts-body" />);
    const skeletonElement = container.firstChild as HTMLElement;

    expect(skeletonElement).toHaveStyle("width: 100%");
    expect(skeletonElement).toHaveStyle("height: 1000px");
  });
});
