import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GeocodingLocation } from "./geocodingAPI";
import { RootState } from "../../app/store";

export interface GeocodingState {
  selectedLocation: GeocodingLocation | undefined | null;
  locations: GeocodingLocation[] | undefined;
  loadingLocations: boolean;
  failedToLoadLocation: boolean;
}

// Thunks
export const fetchLocations = createAsyncThunk<
  GeocodingLocation[],
  string,
  { state: RootState }
>("geocoding/fetchLocations", async (/*props, thunkAPI*/) => {
  // const { dispatch, getState } = thunkAPI;
  //TODO implement geocoding
  return [];
});

export const geocodingSlice = createSlice({
  name: "geocoding",
  initialState: {
    selectedLocation: undefined,
    locations: undefined,
    loadingLocations: false,
    failedToLoadLocation: false,
  } as GeocodingState,
  reducers: {
    setLocations: (state, action: PayloadAction<GeocodingLocation[]>) => {
      state.locations = action.payload;
    },
    setSelectedLocation: (
      state,
      action: PayloadAction<GeocodingLocation | null>
    ) => {
      state.selectedLocation = action.payload;
    },
    clearLocations: (state) => {
      state.locations = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchLocations.pending, (state) => {
      state.loadingLocations = true;
      state.failedToLoadLocation = false;
    });
    builder.addCase(fetchLocations.rejected, (state) => {
      state.loadingLocations = false;
      state.failedToLoadLocation = true;
    });
    builder.addCase(fetchLocations.fulfilled, (state) => {
      state.loadingLocations = false;
      state.failedToLoadLocation = true;
    });
  },
});

// Selectors
export const loadingOptionsSelector = (state: RootState) =>
  state.geocoding.loadingLocations;
export const locationOptionsSelector = (state: RootState) =>
  state.geocoding.locations;

export const { setLocations, setSelectedLocation, clearLocations } =
  geocodingSlice.actions;
export default geocodingSlice.reducer;
