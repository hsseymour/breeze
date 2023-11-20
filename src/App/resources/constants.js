export const WEATHER_ROOT = "https://api.open-meteo.com/v1/forecast?";
export const GEOCODING_ROOT = "https://geocoding-api.open-meteo.com/v1/search?";

export const CURRENT_VARIABLES =
  "current=temperature_2m,relative_humidity_2m,precipitation,wind_speed_10m,wind_direction_10m&wind_speed_unit=mph&timezone=GMT&forecast_days=1";
export const DAILY_VARIABLES =
  "daily=temperature_2m_max,temperature_2m_min,sunrise,sunset,precipitation_sum,precipitation_probability_max,wind_speed_10m_max,wind_direction_10m_dominant&wind_speed_unit=mph&timezone=GMT&forecast_days=14";
// export const HOURLY_VARIABLES =
// "hourly=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation_probability,precipitation,cloud_cover,visibility,wind_speed_10m,soil_temperature_0cm&wind_speed_unit=mph&timezone=GMT";
export const HOURLY_VARIABLES =
  "hourly=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation_probability,precipitation,visibility,wind_speed_10m,soil_temperature_0cm";
export const GEOCODING_VARABLES = "count=5&language=en&format=json";

// https://open-meteo.com/en/docs
// https://open-meteo.com/en/docs/geocoding-api
