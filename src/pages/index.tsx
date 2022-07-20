import * as React from "react";
import { Box, Link, Theme, Typography } from "@mui/material";
import SearchBar from "../components/SearchBar";
import { useAppSelector } from "../app/hooks";
import { daysForecastSelector } from "../features/forecast/forecastSlice";
import DailyForecastPanel from "../components/DailyForecastPanel";

const Forecast: React.FC = () => {
  const daysForecast = useAppSelector(daysForecastSelector);

  return (
    <Box
      display={"flex"}
      flex={1}
      flexDirection={"column"}
      sx={{
        background: (theme: Theme) => theme.palette.background.forecast,
      }}
    >
      <Box
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        mt={6}
      >
        <Typography variant={"h1"} gutterBottom>
          City Forecast
        </Typography>
        <Typography variant={"subtitle1"} sx={{ mb: 5 }}>
          Get the city forecast from{" "}
          <Link
            href={"https://openweathermap.org"}
            target={"_blank"}
            rel={"noopener noreferrer"}
          >
            Open Weather Map
          </Link>
        </Typography>
        <SearchBar />
      </Box>
      <Box
        flex={1}
        display={"flex"}
        justifyContent={"center"}
        gap={2}
        flexWrap={"wrap"}
        marginTop={5}
      >
        {daysForecast?.map((forecast) => (
          <DailyForecastPanel
            key={JSON.stringify(forecast)}
            forecast={forecast}
          />
        ))}
      </Box>
    </Box>
  );
};

export default Forecast;
