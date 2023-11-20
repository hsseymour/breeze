import { WEATHER_ROOT, HOURLY_VARIABLES } from "../resources/constants";
import { api } from ".";

const hourly = () =>
  api({
    ROOT_URL: WEATHER_ROOT,
    VARIABLES: HOURLY_VARIABLES,
    template:
      "latitude={{lat}}&longitude={{long}}&start_date={{start}}&end_date={{start}}",
  });

export default hourly();
