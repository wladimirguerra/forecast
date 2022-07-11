# Forecast App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the nextjs-redux-typescript template.

It uses the [MUI component library](https://mui.com).

## About the project

This is a single page app that shows US addresses forecast.

### Geocoding

The app uses [United States Census Bureau API](https://geocoding.geo.census.gov/geocoder/locations/onelineaddress) to get
the latitude and longitude from a US address.

> __ATTENTION!!__
>
> Due to https://geocoding.geo.census.gov CORS restriction to `localhost` origin,
> it was needed to deploy a proxy to make tests running on local machine.
>
> The server will be available for a short period of time, and then will be
> shutdown for security reasons. So, this app will not work on `localhost` 
> nor in `development` environment after that.
> 
> To make it work again a new working proxy server address must be added to 
> GEOCODE_API_ENDPOINT at `.env.development` file.

### Forecast API

The forecast is obtained from [OpenWeatherMap API](https://openweathermap.org/api/one-call-3).

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

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

About Next.Js see [Next.JS documentation](https://nextjs.org/docs/getting-started)
