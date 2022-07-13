import * as React from "react";
import { Box, Grid, Paper, Typography } from "@mui/material";
import { Thermostat } from "@mui/icons-material";
import { DailyForecast } from "../features/forecast/forecastSlice";
import moment from "moment";

interface DisplayProps {
  label: string;
  value: number;
  unit: string;
}

const DayIntervalBox: React.FC<DisplayProps> = (props) => {
  const { label, value, unit } = props;

  if (!label) throw new Error("label prop must not be null");

  if (!value) return null;

  return (
    <Grid item xs={3}>
      <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
        <Typography
          component={"div"}
          variant={"h6"}
          sx={{
            margin: 0,
            lineHeight: 0.9,
          }}
        >
          {value}
          {unit}
        </Typography>
        <Box
          sx={{
            marginTop: 1,
          }}
        >
          <Typography
            variant={"caption"}
            component={"div"}
            color={"text.secondary"}
          >
            {label}
          </Typography>
        </Box>
      </Box>
    </Grid>
  );
};

const DayStatistics: React.FC<DisplayProps> = (props) => {
  const { label, value, unit } = props;
  return (
    <Typography
      component={"span"}
      sx={{
        lineHeight: 1,
        fontSize: "0.8rem",
      }}
      align={"right"}
      color={"secondary"}
      title={label}
    >
      {value}
      {unit}
    </Typography>
  );
};

export interface DailyForecastPanelProps {
  forecast: DailyForecast;
}

const DailyForecastPanel: React.FC<DailyForecastPanelProps> = (props) => {
  const { forecast } = props;

  return (
    <Paper
      sx={{
        borderRadius: 4,
        overflow: "hidden",
        background: "rgba(121,186,255,0.15)",
        display: "flex",
        flexDirection: "column",
        padding: 2,
        maxWidth: {
          sx: "100%",
          sm: 300,
        },
      }}
    >
      <Box display={"flex"} justifyContent={"space-between"}>
        <Box>
          <Typography
            component={"div"}
            variant={"caption"}
            color={"text.secondary"}
          >
            {moment(forecast.day).format("dddd,").toUpperCase()}
          </Typography>
          <Typography variant={"h5"} component={"div"} noWrap>
            {moment(forecast.day).format(" MMMM Do")}
          </Typography>
        </Box>
        <Box
          display={"flex"}
          alignItems={"flex-end"}
          justifyContent={"flex-end"}
        >
          <Thermostat
            color={"secondary"}
            sx={{ marginBottom: 0.4, marginRight: 0.3 }}
          />
          <Typography
            variant={"h3"}
            component={"div"}
            sx={{ lineHeight: 1 }}
            color={"secondary"}
            noWrap
          >
            {forecast.dayTemperature}˚F
          </Typography>
          <Box
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"space-between"}
            alignItems={"center"}
            gap={0.5}
            sx={{
              marginLeft: 1,
            }}
          >
            <DayStatistics
              label={"Max"}
              value={forecast.maximumTemperature}
              unit={"˚"}
            />
            <DayStatistics
              label={"Mean"}
              value={forecast.meanTemperature}
              unit={"˚"}
            />
            <DayStatistics
              label={"Min"}
              value={forecast.minimumTemperature}
              unit={"˚"}
            />
          </Box>
        </Box>
      </Box>
      <Grid container justifyContent={"space-evenly"} sx={{ marginTop: 6 }}>
        <DayIntervalBox
          label={"MORNING"}
          value={forecast.morningTemperature}
          unit={"˚"}
        />
        <DayIntervalBox
          label={"NIGHT"}
          value={forecast.nightTemperature}
          unit={"˚"}
        />
        <DayIntervalBox
          label={"FEELING"}
          value={forecast.feelsLikeTemperature}
          unit={"˚"}
        />
        <DayIntervalBox
          label={"HUMIDITY"}
          value={forecast.humidity}
          unit={"%"}
        />
      </Grid>
    </Paper>
  );
};

export default DailyForecastPanel;
