import renderer from "react-test-renderer";
import DailyForecastPanel from "./DailyForecastPanel";
import { DailyForecast } from "../features/forecast/forecastSlice";

const FORECAST_MOCK: DailyForecast = {
  day: new Date(2022, 6, 14),
  humidity: 60,
  mode: 10,
  dayTemperature: 21,
  morningTemperature: 7,
  nightTemperature: 10,
  maximumTemperature: 23,
  minimumTemperature: 7,
  feelsLikeTemperature: 19,
  meanTemperature: Math.floor((23 + 7) / 2),
};

describe("DailyForecast Component", () => {
  test("match snapshot", () => {
    const tree = renderer
      .create(<DailyForecastPanel forecast={FORECAST_MOCK} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
