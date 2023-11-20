import { useEffect, useState } from "react";

import { daily, hourly } from "../api";
import { DailyResultWidget } from "../components/composites";

const DailyResult = ({ coordinates }) => {
  console.warn("DAILY RERENDER");
  const [dailyResult, setDailyResult] = useState(null);
  const [hourlyResult, setHourlyResult] = useState(null);

  useEffect(() => {
    daily({ args: { lat: coordinates.lat, long: coordinates.long } }).then(
      (data) => {
        setDailyResult(data);
      }
    );
    hourly({ args: { lat: coordinates.lat, long: coordinates.long } }).then(
      (data) => {
        setHourlyResult(data);
      }
    );
  }, [coordinates]);

  console.log(hourlyResult);

  return (
    <>
      {dailyResult && (
        <DailyResultWidget {...{ dailyResult }} {...{ hourlyResult }} />
      )}
    </>
  );
};

export default DailyResult;
