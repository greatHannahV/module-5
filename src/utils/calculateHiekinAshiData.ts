import { CandleData } from "../pages/Chart/Chart.types";

export function calculateHeikinAshi(data: CandleData[]) {
  const heikinAshiData = [];
  let previousHAOpen = data[0].open;
  let previousHAClose = data[0].close;

  for (let i = 0; i < data.length; i++) {
    const { open, high, low, close } = data[i];

    const haClose = (open + high + low + close) / 4;
    const haOpen = i === 0 ? open : (previousHAOpen + previousHAClose) / 2;
    const haHigh = Math.max(high, haOpen, haClose);
    const haLow = Math.min(low, haOpen, haClose);

    heikinAshiData.push({
      ...data[i],
      open,
      hi: haHigh,
      lo: haLow,
      close,
    });

    previousHAOpen = haOpen;
    previousHAClose = haClose;
  }

  return heikinAshiData;
}
