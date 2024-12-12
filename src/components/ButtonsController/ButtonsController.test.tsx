import { render, screen } from "@testing-library/react";
import ButtonsController from "./ButtonsController";
import { beforeEach, describe, expect, it, vi } from "vitest";
import userEvent from "@testing-library/user-event";

describe("Buttons renders and works", () => {
  const onHandleChartTypeChange = vi.fn();

  beforeEach(() => {
    render(
      <ButtonsController
        selected="candle"
        onHandleChartTypeChange={onHandleChartTypeChange}
      />
    );
  });

  it("should correctly display the selected chart type", () => {
    const candleButton = screen.getByLabelText(/candle/i) as HTMLInputElement;
    expect(candleButton.checked).toBe(true);
  });

  it("should call onHandleChartTypeChange when a radio button is clicked", async () => {
    const barButton = screen.getByLabelText(/bar/i);
    await userEvent.click(barButton);

    expect(onHandleChartTypeChange).toHaveBeenCalledWith(
      expect.objectContaining({
        target: expect.objectContaining({ value: "bar" }),
      })
    );
  });
});
