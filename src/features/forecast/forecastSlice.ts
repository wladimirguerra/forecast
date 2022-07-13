import { createSlice } from "@reduxjs/toolkit";

export interface DailyForecast {
  day: Date;
  humidity: number;
  dayTemperature: number;
  morningTemperature: number;
  nightTemperature: number;
  meanTemperature: number;
  maximumTemperature: number;
  minimumTemperature: number;
  feelsLikeTemperature: number;
  mode: number;
}

export interface ForecastState {
  daysForecast: DailyForecast[];
}

// Thunks

export const forecastSlice = createSlice({
  name: "forecast",
  initialState: {
    daysForecast: [],
  } as ForecastState,
  reducers: {},
  extraReducers: (/*builder*/) => {},
});

// Selectors

/*export const {
  // TODO fill the actions
} = forecastSlice.actions;*/
export default forecastSlice.reducer;
