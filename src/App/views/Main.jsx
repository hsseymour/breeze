import { useState } from "react";

import { ChangePosition, CurrentResult, DailyResult } from ".";
import { ShowLocationTitle } from "../components/composites";

const Main = () => {
  console.warn("MAIN RERENDER");
  const [coordinates, setCoordinates] = useState(null);

  return (
    <div>
      <ChangePosition {...{ setCoordinates }} />
      {coordinates && (
        <div>
          <ShowLocationTitle {...{ coordinates }} />
          <CurrentResult {...{ coordinates }} />
          <DailyResult {...{ coordinates }} />
        </div>
      )}
    </div>
  );
};

export default Main;
