import { getDataInfo } from "../../utils";
import HourlyResultsCard from "./HourlyResultsCard";

const HourlyResultWidget = ({ result }) => {
  const fields = [
    "temperature_2m",
    "apparent_temperature",
    "precipitation_probability",
    "relative_humidity_2m",
    "wind_speed_10m",
  ];

  return (
    <div className="hourlyResultsDiv">
      <h4>Hourly weather for {result.hourly.time[0].split("T")[0]}:</h4>

      <div className="resultsContainer flexRow">
        {result.hourly.time.map((item, index) => (
          <HourlyResultsCard
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
    </div>
  );
};

export default HourlyResultWidget;
