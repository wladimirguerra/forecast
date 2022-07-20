import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface DailyForecast {
  day: string;
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
export const fetchForecast = createAsyncThunk<
  DailyForecast[],
  string,
  { state: RootState }
>("forecast/fetchForecast", async (/*props, thunkAPI*/) => {
  // const { dispatch, getState } = thunkAPI;

  return [
    {
      day: "2022-01-12 00:10:00",
      dayTemperature: 20,
      feelsLikeTemperature: 18,
      humidity: 90,
      maximumTemperature: 23,
      meanTemperature: 19,
      minimumTemperature: 16,
      mode: 0,
      morningTemperature: 17,
      nightTemperature: 10,
    },
    {
      day: "2022-01-13 00:10:00",
      dayTemperature: 20,
      feelsLikeTemperature: 18,
      humidity: 90,
      maximumTemperature: 23,
      meanTemperature: 19,
      minimumTemperature: 16,
      mode: 0,
      morningTemperature: 17,
      nightTemperature: 10,
    },
    {
      day: "2022-01-14 00:10:00",
      dayTemperature: 20,
      feelsLikeTemperature: 18,
      humidity: 90,
      maximumTemperature: 23,
      meanTemperature: 19,
      minimumTemperature: 16,
      mode: 0,
      morningTemperature: 17,
      nightTemperature: 10,
    },
    {
      day: "2022-01-15 00:10:00",
      dayTemperature: 20,
      feelsLikeTemperature: 18,
      humidity: 90,
      maximumTemperature: 23,
      meanTemperature: 19,
      minimumTemperature: 16,
      mode: 0,
      morningTemperature: 17,
      nightTemperature: 10,
    },
    {
      day: "2022-01-16 00:10:00",
      dayTemperature: 20,
      feelsLikeTemperature: 18,
      humidity: 90,
      maximumTemperature: 23,
      meanTemperature: 19,
      minimumTemperature: 16,
      mode: 0,
      morningTemperature: 17,
      nightTemperature: 10,
    },
  ] as DailyForecast[];
});

export const forecastSlice = createSlice({
  name: "forecast",
  initialState: {
    daysForecast: [],
  } as ForecastState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchForecast.fulfilled, (state, action) => {
      state.daysForecast = action.payload;
    });
  },
});

// Selectors
export const daysForecastSelector = (state: RootState) =>
  state.forecast.daysForecast;

/*export const {
  // TODO fill the actions
} = forecastSlice.actions;*/
export default forecastSlice.reducer;
