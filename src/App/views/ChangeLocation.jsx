import { useState } from "react";

import { getUserLocation } from "../utils";
import { Button } from "../components/common";
import {
  LocationCoordinateForm,
  LocationSearchBar,
} from "../components/composites";

const ChangeLocation = ({ setCoordinates }) => {
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
    <div className="flexCol noWrap">
      <div className="flexRow wrap spaceEven">
        <Button
          classes={"flexChild-45p"}
          type="button"
          onClick={toggleIsCoordinates}
        >
          {isCoordinates ? "use location" : "use coordinates"}
        </Button>
        <Button
          classes={"flexChild-45p"}
          onClick={() => getUserLocation(handleUserLocation)}
        >
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
