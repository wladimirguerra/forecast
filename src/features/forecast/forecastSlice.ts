import { createSlice } from "@reduxjs/toolkit";
import { DailyForecast } from "./forecastAPI";

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
  extraReducers: (builder) => {},
});

// Selectors

export const {
  // TODO fill the actions
} = forecastSlice.actions;
export default forecastSlice.reducer;
