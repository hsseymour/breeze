import { useState } from "react";

import { getUserLocation } from "../utils";
import { Button } from "../components/common";
import {
  LocationCoordinateForm,
  LocationSearchBar,
} from "../components/composites";

const ChangeLocation = ({ setCoordinates }) => {
  const [isCoordinates, setisCoordinates] = useState(false);

  const toggleIsCoordinates = () => {
    setisCoordinates((prevState) => !prevState);
  };

  const handleUserLocation = (position) => {
    setCoordinates({
      lat: position.coords.latitude,
      long: position.coords.longitude,
    });
  };

  return (
    <div className="changeLocationDiv flexCol">
      <div className="locationButtonDiv flexRow">
        <Button type="button" onClick={toggleIsCoordinates}>
          {isCoordinates ? "use location" : "use coordinates"}
        </Button>
        <Button onClick={() => getUserLocation(handleUserLocation)}>
          Use your location
        </Button>
      </div>

      {isCoordinates ? (
        <LocationCoordinateForm {...{ setCoordinates }} />
      ) : (
        <LocationSearchBar {...{ setCoordinates }} />
      )}
    </div>
  );
};

export default ChangeLocation;
