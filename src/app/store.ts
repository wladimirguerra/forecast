import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import forecastReducer from "../features/forecast/forecastSlice";
import geocodingReducer from "../features/geocoding/geocodingSlice";

export const store = configureStore({
  reducer: {
    forecast: forecastReducer,
    geocoding: geocodingReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
