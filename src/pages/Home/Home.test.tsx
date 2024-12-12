import { render, screen } from "@testing-library/react";
import { afterAll, afterEach, beforeAll, describe, expect, it } from "vitest";
import Home from "./Home";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, MemoryRouter } from "react-router-dom"; // Import BrowserRouter
import "@testing-library/jest-dom";
import Error from "../../components/Error/Error";
import { http, HttpResponse } from "msw";
import { server } from "../../services/__mock__/browser";
import { basePath } from "../../services/__mock__/handlers";

const queryClient = new QueryClient();
describe("Home component", () => {
  it("Home page is rendered", () => {
    render(
      <BrowserRouter>
        <QueryClientProvider client={new QueryClient()}>
          <Home />
        </QueryClientProvider>
      </BrowserRouter>
    );

    const homeText = screen.getByText(/Main table with stocks/i);
    expect(homeText).toBeInTheDocument();
  });

  it("renders the app successfully", () => {
    render(
      <BrowserRouter>
        <QueryClientProvider client={new QueryClient()}>
          <Home />
        </QueryClientProvider>
      </BrowserRouter>
    );

    expect(
      screen.getByText(/Biggest gainers and losers tables/i)
    ).toBeInTheDocument();
  });

  it("renders error message correctly", () => {
    const errorMessage = "Test error";

    render(
      <BrowserRouter>
        <Error error={errorMessage} />{" "}
      </BrowserRouter>
    );

    const errorText = screen.getByText(/There is the error:/i);
    expect(errorText).toHaveTextContent(errorMessage);
  });

  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => {
    server.close();
  });

  it("should display error when useQuery returns error", async () => {
    render(
      <MemoryRouter>
        <QueryClientProvider client={queryClient}>
          <Home />
        </QueryClientProvider>
      </MemoryRouter>
    );

    server.use(
      http.get(`${basePath}/v6/finance/quote`, () => {
        return HttpResponse.json(
          { message: `There is the error:Error: ["stocks"] data is undefined` },
          { status: 500 }
        );
      })
    );

    const errorMessage = await screen.findByText(
      (content) =>
        content.includes("There is the error:") &&
        content.includes("data is undefined")
    );

    expect(errorMessage).toBeInTheDocument();
  });
});
