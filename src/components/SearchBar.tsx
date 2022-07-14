import * as React from "react";
import { useEffect, useState } from "react";
import { Autocomplete, CircularProgress, TextField } from "@mui/material";
import {
  clearLocations,
  fetchLocations,
  loadingOptionsSelector,
  locationOptionsSelector,
  setSelectedLocation,
} from "../features/geocoding/geocodingSlice";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { GeocodingLocation } from "../features/geocoding/geocodingAPI";
import useDebounce from "../hooks/useDebounce";

const SearchBar: React.FC = () => {
  const [open, setOpen] = React.useState(false);
  const dispatch = useAppDispatch();
  const options = useAppSelector(locationOptionsSelector);
  const loading = useAppSelector(loadingOptionsSelector);
  const [query, setQuery] = useState("");
  const debouncedQuery = useDebounce(query);

  useEffect(() => {
    // Fetch locations

    if (!!debouncedQuery.trim()) {
      dispatch(fetchLocations(debouncedQuery));
    }
  }, [debouncedQuery, dispatch]);

  /*  React.useEffect(() => {
    // Clear locations if not listing
    if (!open) {
      dispatch(clearLocations());
    }
  }, [dispatch, open]);*/

  function handleChange(
    event: React.SyntheticEvent,
    newValue: GeocodingLocation | null
  ) {
    dispatch(setSelectedLocation(newValue));
  }

  function handleQuery(
    event: React.SyntheticEvent,
    value: string,
    reason: "input" | "reset" | "clear"
  ) {
    switch (reason) {
      case "clear":
      case "reset":
        setQuery("");
        dispatch(clearLocations());
        break;
      default:
        setQuery(value);
    }
  }

  return (
    <Autocomplete<GeocodingLocation>
      id="asynchronous-demo"
      sx={{ width: 300 }}
      open={open}
      onOpen={() => {
        setOpen(true);
      }}
      onChange={handleChange}
      onClose={() => {
        setOpen(false);
      }}
      isOptionEqualToValue={(option, value) =>
        option.name + option.country === value.name + value.country
      }
      getOptionLabel={(option) => `${option.name}/${option.country}`}
      options={options ?? []}
      loading={loading}
      inputValue={query}
      onInputChange={handleQuery}
      filterOptions={(x) => x}
      renderInput={(params) => (
        <TextField
          {...params}
          label="City Name"
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <React.Fragment>
                {loading ? (
                  <CircularProgress color="inherit" size={20} />
                ) : null}
                {params.InputProps.endAdornment}
              </React.Fragment>
            ),
          }}
        />
      )}
    />
  );
};

export default SearchBar;
