import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Error from "./Error";
import "@testing-library/jest-dom";
import { describe, expect, it, vi } from "vitest";
import userEvent from "@testing-library/user-event";

describe("Error should be shown", () => {
  it("Error should be shown is there an error", () => {
    const error = "Error: [stocks] data is undefined";

    render(
      <MemoryRouter>
        <Error error={error} />
      </MemoryRouter>
    );

    const errorMessage = screen.getByText(`There is the error:${error}`);
    expect(errorMessage).toBeInTheDocument();
  });
  it("Error should be shown is there not an error", () => {
    render(
      <MemoryRouter>
        <Error />
      </MemoryRouter>
    );

    const errorMessage = screen.getByText(`Something went wrong.Try later`);
    expect(errorMessage).toBeInTheDocument();
  });
  it("should call navigate on Back button click", async () => {
    render(
      <MemoryRouter>
        <Error error="Some error" />
      </MemoryRouter>
    );

    const backButton = screen.getByText("Back");

    const clickSpy = vi.fn();

    backButton.addEventListener("click", clickSpy);

    await userEvent.click(backButton);

    expect(clickSpy).toHaveBeenCalled();
  });
});
