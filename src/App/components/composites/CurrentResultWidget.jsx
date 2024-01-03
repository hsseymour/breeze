import { CurrentResultCard } from ".";
import { getDataInfo } from "../../utils";

const CurrentResultWidget = ({ result }) => {
  const fields = [
    "temperature_2m",
    "apparent_temperature",
    "precipitation",
    "relative_humidity_2m",
    "wind_speed_10m",
    "wind_direction_10m",
  ];

  const infoFields = getDataInfo(result.current, result.current_units, fields);

  return (
    <div className="currentWeatherDiv">
      <h4 className="heading">Current weather:</h4>
      <div className="resultsContainer flexRow">
        {infoFields.map((info, index) => (
          <CurrentResultCard key={index} info={info} />
        ))}
      </div>
    </div>
  );
};

export default CurrentResultWidget;
