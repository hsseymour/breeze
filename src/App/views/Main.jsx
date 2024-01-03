import { useState } from "react";

import { ChangeLocation, CurrentResult, DailyResult } from ".";
import { ShowLocationTitle } from "../components/composites";

const Main = () => {
  const [coordinates, setCoordinates] = useState(null);

  return (
    <>
      <div className="locationDiv flexRow">
        <ChangeLocation {...{ setCoordinates }} />
        {coordinates && <ShowLocationTitle {...{ coordinates }} />}
      </div>

      {coordinates && (
        <>
          <CurrentResult {...{ coordinates }} />
          <DailyResult {...{ coordinates }} />
        </>
      )}
    </>
  );
};

export default Main;
