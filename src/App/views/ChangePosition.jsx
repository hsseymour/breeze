import { useState } from "react";

import { getUserLocation } from "../utils";
import { Button } from "../components/common";
import {
  LocationCoordinateForm,
  LocationSearchBar,
} from "../components/composites";

const ChangePosition = ({ setCoordinates }) => {
  console.warn("CHANGE RERENDER");
  const [isCoordinates, setisCoordinates] = useState(false);

  const toggleIsCoordinates = () => {
    setisCoordinates((prevState) => !prevState);
  };

  const handleUserLocation = (position) => {
    console.log(position);
    setCoordinates({
      lat: position.coords.latitude,
      long: position.coords.longitude,
    });
  };

  return (
    <div>
      <div>
        <Button type="button" onClick={toggleIsCoordinates}>
          {isCoordinates ? "use location" : "use coordinates"}
        </Button>
      </div>
      <div>
        {isCoordinates ? (
          <LocationCoordinateForm {...{ setCoordinates }} />
        ) : (
          <LocationSearchBar {...{ setCoordinates }} />
        )}
      </div>
      <div>
        <Button onClick={() => getUserLocation(handleUserLocation)}>
          Use your location
        </Button>
      </div>
    </div>
  );
};

export default ChangePosition;
