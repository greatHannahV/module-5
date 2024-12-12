export interface Company {
  regularMarketChange: number;
  regularMarketChangePercent: number;
  symbol: string;
  shortName?: string;
}

interface Value {
  value: number;
  change: number;
  company: Company;
}

interface BiggestGainersAndLosers {
  biggestGainers: Value[];
  biggestLosers: Value[];
}
export function getBiggestGainersAndLosers(
  data: Company[]
): BiggestGainersAndLosers {
  const values = data.map((company) => {
    const value = company.regularMarketChange;
    const percent = company.regularMarketChangePercent;

    return {
      value,
      change: percent,
      company,
    };
  });

  values.sort((a, b) => Math.abs(b.value) - Math.abs(a.value));

  const biggestGainers = values.filter((value) => value.value >= 0).slice(0, 5);
  const biggestLosers = values.filter((value) => value.value < 0).slice(0, 5);

  return { biggestGainers, biggestLosers };
}
