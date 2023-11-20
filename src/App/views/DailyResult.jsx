import { useEffect, useState } from "react";

import { daily } from "../api";
import { DailyResultWidget } from "../components/composites";
import HourlyResult from "./HourlyResult";

const DailyResult = ({ coordinates }) => {
  console.warn("DAILY RERENDER");
  const [dailyResult, setDailyResult] = useState(null);
  const [hourlyArgs, setHourlyArgs] = useState({
    ...coordinates,
    start: new Date().toISOString().split("T")[0],
    end: new Date().toISOString().split("T")[0],
  });

  useEffect(() => {
    daily({ args: { lat: coordinates.lat, long: coordinates.long } }).then(
      (data) => {
        setDailyResult(data);
        console.log(data);
      }
    );
  }, [coordinates]);

  return (
    <>
      {dailyResult && (
        <>
          <DailyResultWidget result={dailyResult} {...{ setHourlyArgs }} />
          <HourlyResult {...{ hourlyArgs }} />
        </>
      )}
    </>
  );
};

export default DailyResult;
