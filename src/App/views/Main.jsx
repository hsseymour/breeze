import { useState } from "react";

import { ChangeLocation, CurrentResult, DailyResult } from ".";
import { ShowLocationTitle } from "../components/composites";

const Main = () => {
  console.warn("MAIN RERENDER");
  const [coordinates, setCoordinates] = useState(null);

  return (
    <div className="flexCol centerCross m-m small-gap">
      <div className="flexRow wrap small-gap ">
        <ChangeLocation {...{ setCoordinates }} />
        {coordinates && <ShowLocationTitle {...{ coordinates }} />}
      </div>
      {coordinates && (
        <>
          <CurrentResult {...{ coordinates }} />
          <DailyResult {...{ coordinates }} />
        </>
      )}
    </div>
  );
};

export default Main;
