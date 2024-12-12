import "@testing-library/jest-dom/vitest";
import { cleanup } from "@testing-library/react";
import { afterEach, vi } from "vitest";
import "./src/services/__mock__/matchMedia.ts";
afterEach(() => {
  cleanup();
  vi.clearAllMocks();
});
