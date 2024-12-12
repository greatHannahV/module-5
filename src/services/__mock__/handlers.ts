import { http, HttpResponse } from 'msw'
import TRENDING_US from './v1_trending_us.json'
import QUOTES from './v6_quote.json'
import QUOTE from './v8_quote.json'

export const basePath: string = 'https://yfapi.net'
export const handlers = [
  http.get(`${basePath}/v1/finance/trending/US`, () => {
    return HttpResponse.json(TRENDING_US, { status: 200 })
  }),

  http.get(`${basePath}/v8/finance/chart/AAPL`, () => {
    return HttpResponse.json(QUOTE, { status: 200 })
  }),

  http.get(`${basePath}/v6/finance/quote`, () => {
    return HttpResponse.json(QUOTES, { status: 200 })
  }),
]
