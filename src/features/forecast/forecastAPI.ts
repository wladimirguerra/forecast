/**
 * All the call to the forecast API is made here in this module.
 *
 * The calls are made to the [Open Weather Map]{@link https://openweathermap.org/api/one-call-3#data}
 */

/**
 * All the temperatures units depends on the `units` parameter in the
 * request query.
 *
 * @see {@link ForecastApiRequestQueryParams.units} for options.
 */
export interface DailyTemperature {
  /**
   * Morning temperature
   * @see {@link ForecastApiRequestQueryParams.units} about the unit.
   */
  morn: number;
  /**
   * Day temperature
   * @see {@link ForecastApiRequestQueryParams.units} about the unit.
   */
  day: number;
  /**
   * Evening temperature
   * @see {@link ForecastApiRequestQueryParams.units} about the unit.
   */
  eve: number;
  /**
   * Night temperature
   * @see {@link ForecastApiRequestQueryParams.units} about the unit.
   */
  night: number;
  /**
   * Minimum daily temperature
   * @see {@link ForecastApiRequestQueryParams.units} about the unit.
   */
  min: number;
  /**
   * Maximum daily temperature
   * @see {@link ForecastApiRequestQueryParams.units} about the unit.
   */
  max: number;
}

export interface DailyForecast {
  /**
   * Time of the forecasted data. Unix UTC.
   */
  dt: number;
  /**
   * Sunrise time.
   * Unix UTC.
   */
  sunrise: number;
  /**
   * Sunset time.
   * Unix UTC.
   */
  sunset: number;
  /**
   * Moonrise time.
   * Unix UTC.
   */
  moonrise: number;
  // noinspection SpellCheckingInspection
  /**
   * Moon-set time.
   * Unix UTC.
   */
  moonset: number;
  /**
   *  Moon phase.
   *  - 0 and 1 are 'new moon';
   *  - 0.25 is 'first quarter moon';
   *  - 0.5 is 'full moon';
   *  - 0.75 is 'last quarter moon'.
   *
   *  The periods in between are called, respectively:
   *  - 'waxing crescent';
   *  - 'waxing gibbous';
   *  - 'waning gibbous';
   *  - 'waning crescent'.
   */
  moon_phase: number;
  temp: DailyTemperature;
  /**
   * The human perception of weather.
   * Units – default: kelvin, metric: Celsius, imperial: Fahrenheit.
   * @see {@link ForecastApiRequestQueryParams.units} for options.
   */
  feels_like: number;
  /**
   * Atmospheric pressure on the sea level
   * Unit: hPa
   */
  pressure: number;
  /**
   * Unit: %
   */
  humidity: number;
  /**
   * Atmospheric temperature (varying according to pressure and humidity) below which water
   * droplets begin to condense and dew can form. Units – default: kelvin, metric: Celsius,
   * imperial: Fahrenheit.
   *
   * @see {@link ForecastApiRequestQueryParams.units} about the unit.
   */
  dew_point: number;
  /**
   * @see {@link ForecastApiRequestQueryParams.units} about the unit.
   */
  wind_speed: number;
  /**
   * @see {@link ForecastApiRequestQueryParams.units} about the unit.
   */
  wind_gust?: number;
  /**
   * Wind direction
   * Unit: degree (metrological)
   */
  wind_deg: number;
  /**
   * Cloudiness
   * Unit: %
   */
  clouds: number;
}

interface GeoCoordinates {
  /**
   * latitude
   */
  lat: number;
  /**
   * longitude
   */
  lon: number;
}

export interface ForecastApiResponse extends GeoCoordinates {
  /**
   * The timezone database name.
   * @see [TZ database name list]{@link (https://en.wikipedia.org/wiki/List_of_tz_database_time_zones)}.
   */
  timezone: "America/New_York";
  /**
   * Shift in seconds from UTC
   */
  timezone_offset: -18000;
}

export interface ForecastApiRequestQueryParams extends GeoCoordinates {
  /**
   * Units of measurement.
   *
   * If you do not use the `units` parameter, `standard` units will be applied by default.
   *
   * Temperature is available in Fahrenheit, Celsius and Kelvin units.
   * Wind speed is available in miles/hour and meter/sec.
   *
   * - For temperature in Fahrenheit and wind speed in miles/hour, use units=imperial
   * - For temperature in Celsius and wind speed in meter/sec, use units=metric
   * - Temperature in Kelvin and wind speed in meter/sec is used by default, so there is no need to
   * use the units parameter in the API call if you want this
   */
  units?: "standard" | "metric" | "imperial";
  /**
   * Language
   */
  lang?:
    | "af"
    | "al"
    | "ar"
    | "az"
    | "bg"
    | "ca"
    | "cz"
    | "da"
    | "de"
    | "el"
    | "en"
    | "eu"
    | "fa"
    | "fi"
    | "fr"
    | "gl"
    | "he"
    | "hi"
    | "hr"
    | "hu"
    | "id"
    | "it"
    | "ja"
    | "kr"
    | "la"
    | "lt"
    | "mk"
    | "no"
    | "nl"
    | "pl"
    | "pt"
    | "pt_br"
    | "ro"
    | "ru"
    | "sv"
    | "se"
    | "sk"
    | "sl"
    | "sp"
    | "es"
    | "sr"
    | "th"
    | "tr"
    | "ua"
    | "uk"
    | "vi"
    | "zh_cn"
    | "zh_tw"
    | "zu";
}
