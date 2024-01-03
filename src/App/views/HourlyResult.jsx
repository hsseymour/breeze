import { useEffect, useState } from "react";
import { hourly } from "../api";
import { HourlyResultWidget } from "../components/composites";

const HourlyResult = ({ hourlyArgs }) => {
  const [hourlyResult, setHourlyResult] = useState(null);

  useEffect(() => {
    hourly({
      args: {
        ...hourlyArgs,
      },
    }).then((data) => {
      setHourlyResult(data);
    });
  }, [hourlyArgs]);

  return <>{hourlyResult && <HourlyResultWidget result={hourlyResult} />}</>;
};

export default HourlyResult;
