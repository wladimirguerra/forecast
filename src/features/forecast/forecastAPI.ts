/**
 * All the call to the forecast API is made here in this module.
 *
 * The calls are made to the [Open Weather Map]{@link https://openweathermap.org/forecast5}
 */
import { GeoCoordinates } from "../interfaces";

interface FiveDaysThreeHoursForecastListItem {
  /**
   * Time of the forecasted data. Unix UTC.
   */
  dt: number;
  main: {
    /**
     * Temperature
     * Units – default: kelvin, metric: Celsius, imperial: Fahrenheit.
     * @see {@link ForecastApiRequestQueryParams.units} for options.
     */
    temp: number;
    /**
     * The human perception of weather.
     * Units – default: kelvin, metric: Celsius, imperial: Fahrenheit.
     * @see {@link ForecastApiRequestQueryParams.units} for options.
     */
    feels_like: number;
    /**
     * Minimum daily temperature
     * @see {@link ForecastApiRequestQueryParams.units} about the unit.
     */
    temp_min: number;
    /**
     * Maximum daily temperature
     * @see {@link ForecastApiRequestQueryParams.units} about the unit.
     */
    temp_max: number;
    /**
     * Unit: %
     */
    humidity: number;
  };
  weather: {
    /**
     * Weather condition code
     */
    id: number;
    /**
     * Group of weather parameters
     */
    main: string;
    /**
     * Weather condition within the group
     */
    description: string;
    /**
     * Weather icon id
     * @see [How to get icon URL]{@link https://openweathermap.org/weather-conditions#Weather-Condition-Codes-2}
     */
    icon: string;
  };
}

export interface FiveDaysThreeHoursForecastDataResponse extends GeoCoordinates {
  cod: string;
  message: number;
  cnt: number;
  list: FiveDaysThreeHoursForecastListItem[];
  city: {
    /**
     * Shift in seconds from UTC
     */
    timezone: number;
    name: string;
    country: string;
    coord: GeoCoordinates;
    /**
     * Sunrise time, Unix, UTC
     */
    sunrise: number;
    /**
     * Sunset time, Unix, UTC
     */
    sunset: number;
  };
}

export interface FiveDaysThreeHoursRequestQueryParams extends GeoCoordinates {
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
   * A unique API key.
   *
   * @see ["API key" tab]{@link https://home.openweathermap.org/api_keys} for further details.
   */
  appid: string;
  mode?: string;
  /**
   * A positive integer that limits the number of timestamps in the API response.
   */
  cnt?: number;
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
