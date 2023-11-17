import { WEATHER_ROOT, HOURLY_VARIABLES } from "../resources/variables";
import { api } from "./";

const hourly = () =>
  api({
    ROOT_URL: WEATHER_ROOT,
    VARIABLES: HOURLY_VARIABLES,
    template: "latitude={{lat}}&longitude={{long}}",
  });

export default hourly();
