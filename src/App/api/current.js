import { WEATHER_ROOT, CURRENT_VARIABLES } from "../resources/variables";
import { api } from "./";

const current = () =>
  api({
    ROOT_URL: WEATHER_ROOT,
    VARIABLES: CURRENT_VARIABLES,
    template: "latitude={{lat}}&longitude={{long}}",
  });

export default current();
