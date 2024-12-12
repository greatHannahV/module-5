import { render, screen, waitFor } from '@testing-library/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { MemoryRouter } from 'react-router-dom'
import Chart from './Chart'
import '@testing-library/jest-dom'
import {
  afterAll,
  afterEach,
  beforeAll,
  describe,
  expect,
  it,
  vi,
} from 'vitest'
import '../../services/__mock__/matchMedia.ts'
import { http, HttpResponse } from 'msw'
import { basePath } from '../../services/__mock__/handlers.ts'
import QUOTE from '../../services/__mock__/v8_quote.json'
import { setupServer } from 'msw/node'

const handlers = [
  http.get(`${basePath}/v8/finance/chart/:symbol`, ({ request }) => {
    const symbols = request.params.symbol

    if (symbols === 'AAPL') {
      return HttpResponse.json(QUOTE, { status: 200 })
    }
    return new HttpResponse(null, { status: 404 })
  }),
]

const server = setupServer(...handlers)

vi.mock('react-router-dom', async () => {
  const actual = await import('react-router-dom')
  return {
    ...actual,
    useParams: () => ({
      symbol: 'AAPL',
    }),
    MemoryRouter: actual.MemoryRouter,
  }
})

const queryClient = new QueryClient()

describe('Chart Component', () => {
  // Start the msw server before all tests
  beforeAll(() => {
    global.ResizeObserver = class ResizeObserver {
      observe() {
        console.log('ResizeObserver.observe called')
      }
      unobserve() {
        console.log('ResizeObserver.unobserve called')
      }
      disconnect() {
        console.log('ResizeObserver.disconnect called')
      }
    }

    server.listen()
  })

  // Reset handlers and clear the query client after each test
  afterEach(() => {
    server.resetHandlers()
    queryClient.clear()
  })

  // Close the msw server after all tests
  afterAll(() => server.close())

  // Test to check if the SkeletonCharts component is displayed when loading
  it('should display SkeletonCharts when isLoading is true', async () => {
    render(
      <MemoryRouter>
        <QueryClientProvider client={queryClient}>
          <Chart />
        </QueryClientProvider>
      </MemoryRouter>,
    )

    // Check if the skeleton chart is displayed
    const skeleton = screen.getByTestId('skeleton-charts')
    expect(skeleton).toBeInTheDocument()
  })

  // Test to check if the chart data is displayed when data is successfully fetched
  it.only('should display chart data when data is successfully fetched', async () => {
    render(
      <MemoryRouter>
        <QueryClientProvider client={queryClient}>
          <Chart />
        </QueryClientProvider>
      </MemoryRouter>,
    )

    // Wait for the chart container to be rendered
    const chartContainer = await screen.findByTestId('chart-container')

    // Check if the chart container is in the document
    await waitFor(() => {
      expect(chartContainer).toBeInTheDocument()
    })
  })
})
