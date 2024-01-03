import { useEffect, useState } from "react";

import { getDataInfo } from "../../utils";
import { ScrollButton } from "../common";
import HourlyResultsCard from "./HourlyResultsCard";

const HourlyResultWidget = ({ result }) => {
  const fields = [
    "temperature_2m",
    "apparent_temperature",
    "precipitation_probability",
    "relative_humidity_2m",
    "wind_speed_10m",
  ];

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="hourlyResultsDiv">
      <h4>Hourly weather for {result.hourly.time[0].split("T")[0]}:</h4>

      <div className="flexRow">
        <ScrollButton
          isLeft={true}
          isParentMounted={isMounted}
          scrollElement={"hourlyResultsContainer"}
        />
        <div id="hourlyResultsContainer" className="resultsContainer flexRow">
          {result.hourly.time.map((item, index) => (
            <HourlyResultsCard
              key={index}
              time={new Date(item).toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}
              info={getDataInfo(
                result.hourly,
                result.hourly_units,
                fields,
                index
              )}
            />
          ))}
        </div>
        <ScrollButton
          isLeft={false}
          isParentMounted={isMounted}
          scrollElement={"hourlyResultsContainer"}
        />
      </div>
    </div>
  );
};

export default HourlyResultWidget;
