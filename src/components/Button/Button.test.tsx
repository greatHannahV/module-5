import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeEach, describe, expect, it, vi } from "vitest";
import Button from "./Button";
import "@testing-library/jest-dom";

describe("Button", () => {
  const refetch = vi.fn();

  beforeEach(() => {
    render(<Button refetch={refetch} isFetching={false} />);
  });

  it("should render with 'Update Prices' when not fetching", () => {
    const button = screen.getByRole("button");
    expect(button).toHaveTextContent("Update Prices");
  });

  it("should call refetch when clicked", async () => {
    const button = screen.getByRole("button");
    await userEvent.click(button);

    expect(refetch).toHaveBeenCalledTimes(1);
  });

  it("should not be disabled when not fetching", () => {
    const button = screen.getByRole("button");
    expect(button).not.toBeDisabled();
  });
});
describe("Button", () => {
  const refetch = vi.fn();

  beforeEach(() => {
    render(<Button refetch={refetch} isFetching={true} />);
  });
  it("should render with 'Updating...' when fetching", () => {
    const button = screen.getByRole("button");
    expect(button).toHaveTextContent(/Updating.../i);
  });
  it("should be disabled when fetching", () => {
    const button = screen.getByRole("button");
    expect(button).toBeDisabled();
  });
});
