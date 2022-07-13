import forecastReducer, { ForecastState } from "./forecastSlice";

describe("forecastSlice", () => {
  test("can handle initial state", () => {
    expect(forecastReducer(undefined, { type: "unknown" })).toEqual({
      daysForecast: [],
    } as ForecastState);
  });
});
