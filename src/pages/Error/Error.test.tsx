import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import "@testing-library/jest-dom";
import { describe, expect, it, vi } from "vitest";
import userEvent from "@testing-library/user-event";
import Error from "./Error";

describe("Error should be shown", () => {
  it("should call navigate on Back button click", async () => {
    render(
      <MemoryRouter>
        <Error />
      </MemoryRouter>
    );

    const backButton = screen.getByText("Back");

    const clickSpy = vi.fn();

    backButton.addEventListener("click", clickSpy);

    await userEvent.click(backButton);

    expect(clickSpy).toHaveBeenCalled();
  });
  it("renders error message when there is an error ", () => {
    render(
      <MemoryRouter initialEntries={["/error"]}>
        <Routes>
          <Route path="/error" element={<Error />} />
        </Routes>
      </MemoryRouter>
    );

    const errorMessage = screen.getByText("Something went wrong.");
    expect(errorMessage).toBeInTheDocument();
  });
});
