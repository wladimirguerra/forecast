# Forecast App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the nextjs-redux-typescript template.

It uses the [MUI component library](https://mui.com).

## About the project

This is a single page app that shows US addresses forecast.

### Forecast API

The forecast is obtained from [OpenWeatherMap API](https://openweathermap.org/api/one-call-3).

> Call 5 day / 3 hour forecast data [API documentation](https://openweathermap.org/forecast5)

## Steps to Run

To proper run this project the environment variable `WEATHER_API_KEY` must 
be set with an API key from OpenWeatherMap.

For security reasons the proper place to put this environment variable is
in the `.env.local` file. It is ignored by git so the key is not exposed
to the repository.

This application uses __3-hour Forecast 5 days__ API endpoint. So it is
available in their [Free plan](https://openweathermap.org/price) at the moment this application is
being developed.

## Available Scripts

In the project directory, you can run:

### `npm dev`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.

### `npm start`

Runs the app in the production mode.

### `npm test`

Launches the test runner in the interactive watch mode.

### `npm run build`

Generates an optimized version of your application for production.

The output is generated inside the .next folder.\

See the section about [deployment](https://nextjs.org/docs/deployment#nextjs-build-api) for more information.

### `npm run storybook`

Start `storybook` locally to preview project specific components and pages.

### `npm run build-storybook`

Build `storybook` stories.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

About Next.Js see [Next.JS documentation](https://nextjs.org/docs/getting-started)
