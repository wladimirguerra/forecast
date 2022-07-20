import React, { useEffect } from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import Forecast from "../pages";
import { Provider } from "react-redux";
import { store } from "../app/store";
import { useAppDispatch } from "../app/hooks";
import { fetchForecast } from "../features/forecast/forecastSlice";
import { Box, Theme } from "@mui/material";

export default {
  title: "Pages/Index",
  component: Forecast,
  decorators: [
    (Story) => (
      <Provider store={store}>
        <Story />
      </Provider>
    ),
  ],
} as Meta;

const Template: Story = (args) => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchForecast("London"));
  }, [dispatch]);

  return (
    <Box
      sx={{ background: (theme: Theme) => theme.palette.background.forecast }}
    >
      <Forecast {...args} />
    </Box>
  );
};

export const Default = Template.bind({});
