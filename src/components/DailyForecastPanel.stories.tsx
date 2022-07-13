import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import DailyForecastPanel, {
  DailyForecastPanelProps,
} from "./DailyForecastPanel";
import { Box } from "@mui/material";

export default {
  title: "Components/DailyForecastPanel",
  component: DailyForecastPanel,
} as Meta;

const Template: Story<DailyForecastPanelProps> = (args) => (
  <Box
    sx={{
      background:
        "linear-gradient(0deg, rgba(218,241,255,1) 41%, rgba(125,207,255,1) 91%)",
      padding: 2,
    }}
  >
    <DailyForecastPanel {...args} />
  </Box>
);

export const Default = Template.bind({});

Default.args = {
  forecast: {
    day: new Date(),
    humidity: 60,
    mode: 10,
    dayTemperature: 21,
    morningTemperature: 7,
    nightTemperature: 10,
    maximumTemperature: 23,
    minimumTemperature: 7,
    feelsLikeTemperature: 19,
    meanTemperature: Math.floor((23 + 7) / 2),
  },
};
