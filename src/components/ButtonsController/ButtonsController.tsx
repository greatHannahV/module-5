import { ButtonsContainer, RadioButton } from "./ButtonsController.styles";
import { ButtonsControllerProps } from "./ButtonsController.types";
const chartTypes = [
  "candle",
  "bar",
  "line",
  "area",
  "scatterPlot",
  "hollow",
  "histogram",
  "baseline",
  "trend",
  "heikin-ashi",
];

const ButtonsController: React.FC<ButtonsControllerProps> = ({
  selected,
  onHandleChartTypeChange,
}) => {
  return (
    <ButtonsContainer>
      {chartTypes.map((chartType) => (
        <RadioButton key={chartType}>
          <input
            name="chart-type"
            type="radio"
            value={chartType}
            checked={chartType === selected}
            onChange={onHandleChartTypeChange}
          />
          {chartType.charAt(0).toUpperCase() + chartType.slice(1)}
        </RadioButton>
      ))}
    </ButtonsContainer>
  );
};

export default ButtonsController;
