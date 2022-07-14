import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import SearchBar from "./SearchBar";
import { Provider } from "react-redux";
import { store } from "../app/store";

export default {
  title: "Components/SearchBar",
  component: SearchBar,
  decorators: [
    (Story) => (
      <Provider store={store}>
        <Story />
      </Provider>
    ),
  ],
} as Meta;

const Template: Story = (args) => <SearchBar {...args} />;

export const Default = Template.bind({});
