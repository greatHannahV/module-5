import { useState, useEffect, useCallback, useMemo, FC } from 'react'
import { useQuery } from '@tanstack/react-query'
import SkeletonCharts from '../../components/skeletons/SkeletonCharts/SkeletonCharts'
import { fetchStockTicker } from '../../services/getData'
import { ChartContainer, Container, Settings } from './Chart.styles'
import { calculateHeikinAshi } from '../../utils/calculateHiekinAshiData.ts'
import ButtonsController from '../../components/ButtonsController/ButtonsController'
import ChartContent from '../../components/ChartContent/ChartContent'
import Button from '../../components/Button/Button'
import Error from '../../components/Error/Error'
import { useParams } from 'react-router-dom'
import { Chart as ChartInstance, createChart } from '@devexperts/dxcharts-lite'
import { BarTypes, Candles } from './Chart.types.ts'

const Chart: FC = () => {
  const { symbol } = useParams()
  const {
    isLoading,
    error,
    data: selectedCompany,
    refetch,
    isFetching,
  } = useQuery({
    queryKey: ['stocks', symbol],
    queryFn: () => fetchStockTicker(symbol),
  })
  console.log('selectedCompany', selectedCompany)
  const candles: Candles = useMemo<Candles>(() => {
    if (!selectedCompany) return { regularCandles: [], heikinAshi: [] }

    const regularCandles = selectedCompany?.processedData.map((item) => ({
      timestamp: item.timestamp,
      open: item.open,
      close: item.close,
      high: item.high,
      low: item.low,
      volume: item.volume,
      id: String(item.timestamp + item.open),
    }))

    const heikinAshi = calculateHeikinAshi(regularCandles)

    return { regularCandles, heikinAshi }
  }, [selectedCompany])

  const [chartInstance, setChartInstance] = useState<ChartInstance | null>(null)
  const [chartType, setChartType] = useState('candle')

  const setRef = useCallback((node: HTMLDivElement | null) => {
    if (node) {
      const chart: any = createChart(node)
      setChartInstance(chart)
    }
  }, [])

  const handleChartTypeChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const chartType: string = event.target.value
      setChartType(chartType)

      if (!chartInstance) return

      if (chartType === 'heikin-ashi') {
        const haData = candles.heikinAshi
        chartInstance.setData({ candles: haData })
        chartInstance.data.setMainSeries({ candles: haData })
        chartInstance.data.setChartType('candle')
      } else {
        const regularData = candles.regularCandles
        chartInstance.setData({ candles: regularData })
        chartInstance.data.setMainSeries({ candles: regularData })
        chartInstance.data.setChartType(chartType as keyof BarTypes)
      }
    },
    [candles, chartInstance],
  )

  useEffect(() => {
    if (chartInstance) {
      handleChartTypeChange({
        target: { value: 'candle' },
      } as React.ChangeEvent<HTMLInputElement>)
    }
  }, [chartInstance, handleChartTypeChange])

  if (isLoading) {
    return <SkeletonCharts />
  }

  if (error) {
    return <Error error={error} />
  }

  return (
    <Container data-testid="chart-container">
      <Settings>
        <Button refetch={refetch} isFetching={isFetching} />
        <ChartContent selectedCompany={selectedCompany} />
        <ButtonsController
          onHandleChartTypeChange={handleChartTypeChange}
          selected={chartType}
        />
      </Settings>
      <ChartContainer ref={setRef} />
    </Container>
  )
}

export default Chart
