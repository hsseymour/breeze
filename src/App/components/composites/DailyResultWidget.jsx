import { getDataInfo, getDayOfTheWeek } from "../../utils";
import DailyResultsCard from "./DailyResultsCard";

const DailyResultWidget = ({ result, setHourlyArgs }) => {
  const fields = [
    "precipitation_probability_max",
    "temperature_2m_max",
    "temperature_2m_min",
    "wind_speed_10m_max",
    "wind_direction_10m_dominant",
  ];

  return (
    <div className="dailyResultsDiv">
      <h4 className="heading">Daily weather:</h4>

      <div className="resultsContainer flexRow">
        {result.daily.time.map((item, index) => (
          <DailyResultsCard
            date={item}
            info={getDataInfo(result.daily, result.daily_units, fields, index)}
          />
        ))}
      </div>
    </div>
  );
};

export default DailyResultWidget;
