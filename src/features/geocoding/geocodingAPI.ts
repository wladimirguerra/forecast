import { GeoCoordinates } from "../interfaces";

export interface GeocodingLocation extends GeoCoordinates {
  name: string;
  local_names: Record<string, string>;
  country: string;
}

export type GeocodingResponse = GeocodingLocation[];
