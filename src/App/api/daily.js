import { WEATHER_ROOT, DAILY_VARIABLES } from "../resources/variables";
import { api } from "./";

const daily = () =>
  api({
    ROOT_URL: WEATHER_ROOT,
    VARIABLES: DAILY_VARIABLES,
    template: "latitude={{lat}}&longitude={{long}}",
  });

export default daily();
