import { CompanyInfo, Title } from "./ChartContent.styles";
import { ChartContentProps } from "./ChartContent.types";
import {
  getDate,
  getPriceChageAmout,
  getPriceChangeRate,
  TITLES,
} from "./ChartContent.util";

const ChartContent: React.FC<ChartContentProps> = ({ selectedCompany }) => {
  if (!selectedCompany) return;

  const { shortName, ...data } = selectedCompany.chartData.meta;
  const infos = Object.keys(TITLES).map((key) => {
    let value: string | number = data[key as keyof typeof data];

    if (key === "regularMarketTime") {
      value = getDate(selectedCompany?.chartData.timestamp[0]);
    }
    if (key === "regularMarketChange") {
      value = getPriceChageAmout(data);
    }
    if (key === "regularMarketChangePercent") {
      value = getPriceChangeRate(data);
    }
    return (
      <p key={key}>
        {TITLES[key]}: {value}
      </p>
    );
  });

  return (
    <div>
      <Title>{shortName}</Title>
      {selectedCompany.chartData ? (
        <CompanyInfo>{infos}</CompanyInfo>
      ) : (
        <p>Loading company data...</p>
      )}
    </div>
  );
};

export default ChartContent;
