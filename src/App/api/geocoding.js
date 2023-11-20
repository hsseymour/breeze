import { GEOCODING_ROOT, GEOCODING_VARABLES } from "../resources/constants";
import { api } from ".";

const geocoding = () =>
  api({
    ROOT_URL: GEOCODING_ROOT,
    VARIABLES: GEOCODING_VARABLES,
    template: "name={{name}}",
  });

export default geocoding();
