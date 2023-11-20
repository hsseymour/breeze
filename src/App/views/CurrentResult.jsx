import { useEffect, useState } from "react";

import { current } from "../api";
import CurrentResultWidget from "../components/composites/CurrentResultWidget";

const CurrentResult = ({ coordinates }) => {
  console.warn("CURRENT RERENDER");
  const [currentResult, setCurrentResult] = useState(null);

  useEffect(() => {
    current({ args: { lat: coordinates.lat, long: coordinates.long } }).then(
      (data) => {
        setCurrentResult(data);
      }
    );
  }, [coordinates]);

  return <>{currentResult && <CurrentResultWidget result={currentResult} />}</>;
};

export default CurrentResult;
