import { useEffect, useState } from "react";
import { hourly } from "../api";
import { HourlyResultWidget } from "../components/composites";

const HourlyResult = ({ hourlyArgs }) => {
  console.warn("HOURLY RERENDER");
  const [hourlyResult, setHourlyResult] = useState(null);

  useEffect(() => {
    hourly({
      args: {
        ...hourlyArgs,
      },
    }).then((data) => {
      setHourlyResult(data);
      console.log("data");
    });
  }, [hourlyArgs]);

  return <>{hourlyResult && <HourlyResultWidget result={hourlyResult} />}</>;
};

export default HourlyResult;
