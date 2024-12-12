import { z } from 'zod'

const QuoteSchema = z.object({
  symbol: z.string(),
})

const StockSchema = z.object({
  count: z.number(),
  quotes: z.array(QuoteSchema),
  jobTimestamp: z.number(),
  startInterval: z.number(),
})

const MetaDataSchema = z.object({
  currency: z.string(),
  symbol: z.string(),
  exchangeName: z.string(),
  fullExchangeName: z.string(),
  instrumentType: z.string(),
  shortName: z.string().optional(),
})

const ProcessedDataSchema = z.object({
  low: z.array(z.number().nullable()),
  high: z.array(z.number().nullable()),
  volume: z.array(z.number().nullable()),
  close: z.array(z.number().nullable()),
  open: z.array(z.number().nullable()),
})

const IndicatorsSchema = z.object({
  quote: z.array(ProcessedDataSchema),
})

const ChartDataSchema = z.object({
  indicators: IndicatorsSchema,
  meta: MetaDataSchema,
  timestamp: z.array(z.number()),
})

const ResultSchema = z.object({
  meta: MetaDataSchema,
  timestamp: z.array(z.number()),
  indicators: z.object({
    quote: z.array(
      z.object({
        low: z.array(z.number()),
        high: z.array(z.number()),
        volume: z.array(z.number()),
        close: z.array(z.number()),
        open: z.array(z.number()),
      }),
    ),
  }),
})

const FinanceSchema = z.object({
  result: z.array(StockSchema),
})

const DataSchema = z.object({
  finance: FinanceSchema.optional(),
  chart: z
    .object({
      result: z.array(ResultSchema),
    })
    .optional(),
  error: z.null(),
})

export type Data = z.infer<typeof DataSchema>
export type Result = z.infer<typeof ResultSchema>
export type Stock = z.infer<typeof StockSchema>
export type MetaData = z.infer<typeof MetaDataSchema>
export type ChartData = z.infer<typeof ChartDataSchema>

export function isDataValid(result: unknown): result is Data {
  return DataSchema.safeParse(result).success
}

export function isFinanceResult(result: unknown): result is Stock[] {
  return (
    Array.isArray(result) &&
    result.every((item) => StockSchema.safeParse(item).success)
  )
}
// export function isChartData(result: unknown): result is ChartData[] {
//   return ChartDataSchema.safeParse(result).success;
// }

export function isString(value: unknown): value is string {
  return typeof value === 'string'
}
